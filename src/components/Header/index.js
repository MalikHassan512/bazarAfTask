import { View, Text, Image } from 'react-native'
import React from 'react'
import Images from '../../constants/Images'
import styles from './styles'

const Header = ({title, count}) => {

  return (
    <View style={styles.container}>
      <View />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.row}>
        <Image
          source={Images.Cart}
          style={styles.cartIcon}
        />
        <View style={styles.counterCon}>
          <Text style={styles.counter}>{count}</Text>
        </View>
      </View>
    </View>
  );
}



export default Header