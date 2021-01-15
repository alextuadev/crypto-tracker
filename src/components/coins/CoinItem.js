import React from 'react';
import { Text, View, StyleSheet } from 'react-native'
import { Colors } from '../../res/colors';

const CoinItem = ({ item }) => {

  getImageArror = () => {
    if (item.percent_change_1h > 0) {
      return require("../../assets/arrow_up.png")
    } else {
      return require("../../assets/arrow_down.png")
    }
  }


  return (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.symbol}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  },
});
export default CoinItem