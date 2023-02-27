import React from "react";
import { View,Text,StyleSheet, Button } from "react-native";
import { Provider } from 'react-redux';
import { store } from './app/store';
import Counter from './features/counter/Counter';

  function App() {

    // View: the UI definition
    return (
    <Provider store={store}>
      <View style={styles.firstsection}>
        <View>
            
            
            <View>
              <Counter/>
            </View>
        </View>
      </View>
    </Provider>
    )
    }


    
const styles=StyleSheet.create({
  firstsection:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"lightblue"
  },
  firsttext:{
    fontSize:30,
  }
})
export default App;