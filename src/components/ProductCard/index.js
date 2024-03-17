import { Text, Image, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'

const ProductCard = ({item, onPressCard}) => {
    const pressHandler = () => {
    onPressCard(item);
    }

  return (
    <Pressable style={styles.productCard} onPress={pressHandler}>
      <Image source={{uri: item.image}} style={styles.productImage} />
      <Text style={styles.productName}>{item.title}</Text>
    </Pressable>
  );
}




export default ProductCard