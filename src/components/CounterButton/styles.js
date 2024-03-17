import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 0.8,
    borderRadius: 30,
    borderColor: 'lightblue',
    alignSelf: 'center',
    width: '90%',
    height: 48,
    marginTop: 20,
  },
  buttonHalf: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    height: '100%',
    backgroundColor: 'transparent',
  },
  buttonText: {
    fontSize: 24,
    color: 'grey'
  },
  countText: {
    fontSize: 18,
    fontWeight: '400',
    color: 'grey',
  },
  flexEnd: {
    alignItems: 'flex-end',
  },
  lightBlue:{color: Colors.lightblue }
});

export default styles;
