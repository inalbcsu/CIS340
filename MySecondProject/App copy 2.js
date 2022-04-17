import React from 'react';
import {Text} from 'react-native';



export default function App() {

  function getFullName(fName, lName){
    return fName + " " + lName;
  }
  const pet = "Cat";
  return (
    <Text> 
      {"\n\n\n\n\n"}
      {"\t\t\t"}
      Hello, I am a student in CIS340! 
      {"\n"}
      My full name is {getFullName("Ian", "Nalbach")}!
      {"\n"}
      I have a {pet}!
    </Text>
  )
}


