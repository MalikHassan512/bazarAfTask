import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  backButton: {
    position: 'absolute',
    top: 5,
    left: 5,
    padding: 10,
    zIndex: 1,
  },
  backText: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: 'pink',
    padding: 5,
    borderRadius: 5,
  },
  image: {
    width: '100%',
    height: '40%',
    resizeMode: 'cover',
  },
  detailsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
  },
  addToCartButton: {
    backgroundColor: Colors.lightblue,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    padding: 15,
    borderRadius: 30,
  },
  addToCartButtonText: {
    color: 'grey',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
