import React from 'react';
import { Text, TextInput, View } from 'react-native';

function Student(props) {
  return (
    <View >
      <Text>
        Hey, my name is {props.name}, I am a student in CIS340.
        </Text>
    </View>
  );
}

export default function MultiComp() {
  return(
    <View style = {{
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'flex-start'
    }}>
      <Text>
        Welcome to CIS340
      </Text>
      <Student name = "Ian Nalbach"/>
      <Student name = "Zoot Zootington"/>
    </View>
  );
}
