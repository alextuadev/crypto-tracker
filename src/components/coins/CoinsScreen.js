import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Http from '../../libs/http';
import CoinItem from './CoinItem';
import Colors from '../../res/colors'

class CoinsScreen extends Component {
  state = {
    coins: [],
    loading: true
  }

  componentDidMount = async () => {
    this.setState({ loading: true })
    const res = await Http.instance.get("https://api.coinlore.net/api/tickers/");
    this.setState({ coins: res.data, loading: false })
    console.log(res.data)
  }

  handlePress = () => {
    this.props.navigation.navigate('CoinDetail')
  }

  render() {
    const { coins, loading } = this.state;

    return (
      <View style={styles.container}>

        {loading ?
          <ActivityIndicator
            color="#000"
            size="large"
            style={styles.loader}
          /> : null}

        <FlatList
          data={coins}
          renderItem={CoinItem}
        />

      </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.charade
  },
  btn: {
    padding: 8,
    backgroundColor: 'blue',
    borderRadius: 8,
    margin: 16
  },
  btnText: {
    color: 'white'
  },
  loader: {
    marginTop: 16
  }
})
export default CoinsScreen;