import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import {useSelector} from 'react-redux';
import { Header } from '../../components';
import styles from './styles';

const Cart = () => {
  const {products, countOfSingleProduct, cartCount} = useSelector(state => state.cart);

  const renderItem = ({item}) => {
    const totalCount = countOfSingleProduct[item.id] || 0;

    console

    return (
      <View style={styles.card}>
        <Image source={{uri: item.image}} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.title}>{item.title}</Text>
          <Text>Total Count: {totalCount}</Text>
        </View>
      </View>
    );
  };


  return (
    <View style={styles.container}>
      <Header title="Cart" count={cartCount.length} />
      <FlatList
        data={products.flat()}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};


export default Cart;
