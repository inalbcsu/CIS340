import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {

  const csuLogo = {
    uri: "https://raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/images/logo.png",
  };

  return (
    <View style={styles.container}>

      <Image
       style={styles.localCsuLogo}
       source={require('./assets/logo.jpg')}
      />

      <Image
       style={styles.urlCsuLogo}
       source={{
         uri: "https://raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/images/logo.png"
       }}
      />  

      <Image
       style={styles.stretch}
       source={require('./assets/logo.jpg')} />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },

  localCsuLogo: {
    width: 55,
    height: 65,
  },

  urlCsuLogo: {
    width: 50,
    height: 50,
  },

  stretch: {
    width: 50,
    height: 200,
    resizeMode: 'stretch',
  }
});
