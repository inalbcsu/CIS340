import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
     
      <Image source={require('./assets/icon.png')}
        style={styles.logo} />

      <Text style={styles.insts}> 
         Press the button below to select an image on your phone! 
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => alert('You must select an image!')} >


        <Text style={styles.buttonText}>Pick Image!</Text>

      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },

  button: {
    alignItems: "center",
    backgroundColor: "#778899",
    padding: 10
  },

  insts: {

    fontSize: 18,
    color: "#87CEFA",
    marginHorizontal: 15,
    marginBottom: 10,

  },

  logo: {
    width: 305,
    height: 300,
    marginBottom: 20
  },

  buttonText:{
    fontSize: 20,
    color: "#fff"
  }

});