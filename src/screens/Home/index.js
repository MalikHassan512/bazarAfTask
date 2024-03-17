import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {ProductCard, Header} from '../../components';
import axios from 'axios';
import URLs from '../../constants/URLs';
import {useNavigation} from '@react-navigation/native';
import Strings from '../../constants/Strings';
import styles from './styles';
import { useSelector } from 'react-redux';

const Home = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);

  const {cartCount} = useSelector(state => state.cart);

  useEffect(() => {
    axios
      .get(`${URLs.baseUrl}products`)
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  const onPressCard = item => {
    navigation.navigate(Strings.ProductDetails, {item});
  };

  return (
    <View style={styles.container}>
      <Header title={Strings.Home} count={cartCount.length} />
      <FlatList
        data={products}
        renderItem={({item}) => (
          <ProductCard item={item} onPressCard={onPressCard} />
        )}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.productList}
        showsVerticalScrollIndicator={false} // Hide scroll indicator
      />
    </View>
  );
};

export default Home;
