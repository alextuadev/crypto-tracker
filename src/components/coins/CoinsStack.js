import React from 'react';
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack';
import CoinsScreen from './CoinsScreen';
import CoinDetailScreen from './CoinDetailScreen';
import Colors from '../../res/colors'

const Stack = createStackNavigator();

const CoinsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.blackPearl,
          shadowColor: Colors.blackPearl // line below the header only visible in iOS
        },
        headerTintColor: Colors.white
      }}
    >
      <Stack.Screen
        name="Coins"
        component={CoinsScreen} />
      <Stack.Screen
        name="CoinDetail"
        component={CoinDetailScreen} />

    </Stack.Navigator>
  );
}

export default CoinsStack;