import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class TouchableButton extends Component {

  

  _onPressButton() {
    alert('You tapped a button')
  }


  render() {
    return (

      

      <View style={styles.container}>
        <View style={styles.containerButton}>
        <Button
          onPress={this._onPressButton}
          title="Press Button 1" />
      </View>
      
      <View style={styles.containerButton}>
          <Button
            onPress={this._onPressButton}
            title="Press Button 2" />
      </View>

      <View style={styles.containerButton}>
          <Button
            onPress={this._onPressButton}
            title="Press Button GOOD JOB!" />
      </View>

      <View style={styles.containerButton}>
          <Button
            onPress={this._onPressButton}
            title="Press Button I GET IT" />
      </View>


      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  containerButton: {
    margin: 20,
  },

  contatinerLayoutButton: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }

});