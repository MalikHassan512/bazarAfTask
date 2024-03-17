import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: Colors.bg,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  row: {flexDirection: 'row'},
  counterCon: {
    width: 20,
    height: 20,
    backgroundColor: 'red',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 3,
    marginRight: -3,
    marginTop: -3,
  },
  counter: {color: 'white', fontSize: 12, fontWeight: 'bold'},
  cartIcon: {width: 30, height: 30, resizeMode: 'contain'},
});  

export default styles;