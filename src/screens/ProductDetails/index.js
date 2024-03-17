import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { CounterButton } from '../../components';
import { useDispatch, } from 'react-redux';
import {setCartCount, setProducts, setCountOfSingleProduct } from '../../redux/CartSlice';
import Strings from '../../constants/Strings';
import styles from './styles';

const ProductDetails = ({route, navigation}) => {
  const {item} = route.params;
  const dispatch = useDispatch();


  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleCartFN = (count) => {
    dispatch(setCartCount(count));
    dispatch(setProducts([item]));

    dispatch(setCountOfSingleProduct({productId: item.id, count: count}));
  };

  const navigateToCart = () => {
    navigation.navigate(Strings.CartScreen);

  }


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
        <Text style={styles.backText}>{'<'}</Text>
      </TouchableOpacity>
      <Image
        source={{uri: item.image}}
        style={styles.image}
   
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{item.title}</Text>
        <Text style={styles.price}>Price: ${item.price.toFixed(2)}</Text>
      </View>

      <CounterButton handleCart={handleCartFN} />
      <TouchableOpacity style={styles.addToCartButton} onPress={navigateToCart} >
        <Text style={styles.addToCartButtonText}>{Strings.ViewCart}</Text>
      </TouchableOpacity>
    </View>
  );
};



export default ProductDetails;
