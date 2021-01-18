import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native'
import Colors from '../../res/colors'

const CoinItem = ({ item }) => {

  getImageArrow = () => {
    if (item.percent_change_1h > 0) {
      return require("../../assets/arrow_up.png")
    } else {
      return require("../../assets/arrow_down.png")
    }
  }

  formatMoney = (money) => {
    return '$' + parseFloat(money).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.symbolText}>{item.symbol}</Text>
        <Text style={styles.priceText}>{formatMoney(item.price_usd)}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.percent_text}>{item.percent_change_1h}%</Text>
        <Image
          source={getImageArrow()}
          style={styles.imgArrow}
        />

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-between',
    borderBottomColor: Colors.zircon,
    borderBottomWidth: 2
  },
  row: {
    flexDirection: 'row'
  },
  symbolText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 16
  },
  nameText: {
    fontSize: 14,
    color: '#fff',
    marginRight: 16
  },
  percent_text: {
    fontSize: 12,
    color: '#fff',
    marginRight: 8
  },
  priceText: {
    color: '#fff',
    fontSize: 14
  },
  imgArrow: {
    width: 12,
    height: 12
  }
});
export default CoinItem