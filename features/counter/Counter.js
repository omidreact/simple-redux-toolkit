import React from 'react';
import {View,Text,StyleSheet, Button} from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  selectCount,
} from './counterSlice';


function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();


  return (
    <View style={styles.firstsec}>
      
        <Button
          
          title="Decrement value"
          onPress={() => dispatch(decrement())}
        >
          -
        </Button>
        <Text style={styles.textcount}>{count}</Text>
        <Button
          
          title="Increment value"
          onPress={() => dispatch(increment())}
        >
          +
        </Button>
      
 
    </View>
  );
}
const styles=StyleSheet.create({
  firstsec:{
    alignItems:"center",
    justifyContent:"center"
  },
  textcount:{
    fontSize:80
  }
  
})
export default Counter;
