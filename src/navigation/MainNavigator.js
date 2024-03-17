import React from 'react';
import { Home, ProductDetails, Cart } from '../screens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Strings from '../constants/Strings';

// Creating a native stack navigator
const Stack = createNativeStackNavigator();

// Main Navigator component
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Strings.Home}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={Strings.Home} component={Home} />
        <Stack.Screen
          name={Strings.ProductDetails}
          component={ProductDetails}
        />
        <Stack.Screen name={Strings.CartScreen} component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// exporting the MainNavigator component
export default MainNavigator;
