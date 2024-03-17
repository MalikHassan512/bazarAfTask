import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';

const CounterButton = ({handleCart}) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    handleCart(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
        handleCart(count - 1);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonHalf} onPress={decrement}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.countText}>{count}</Text>
      <TouchableOpacity
        style={[styles.buttonHalf, styles.flexEnd]}
        onPress={increment}>
        <Text style={[styles.buttonText, styles.lightBlue]}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CounterButton;
