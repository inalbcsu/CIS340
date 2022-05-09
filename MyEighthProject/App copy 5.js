import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Touchable } from 'react-native';
import * as ImagePicker from 'expo-image-picker'// import
import * as Sharing from 'expo-sharing'; //import

export default function App() {

  const [selectedImage, setSelectedImage] = React.useState(null)

  let openImagePickerAsync = async () => {

    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });

  };


  let openSharingDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert('Sharing is available on my phone');
      return;
    }

    Sharing.shareAsync(selectedImage.localUri);
  };

  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image source={{ uri: selectedImage.localUri }} />

        <TouchableOpacity onPress={openSharingDialogAsync} style={styles.button}>
          <Text style={styles.buttonText}> Share My Photo </Text>
        </TouchableOpacity>
      </View>
    )
  }
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

  buttonText: {
    fontSize: 20,
    color: "#fff"
  },

  selImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain'
  }

});