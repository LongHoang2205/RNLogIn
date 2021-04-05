import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View , SafeAreaView,TextInput} from 'react-native';
import {RNButton, RNTextInput,RNButtonSubmit} from './components';
import Styles from './AppStyle'
// import styles from './components/TextInput/TextInputStyle';
// import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.title}>
          <Text style={Styles.text}>
            Sign In
          </Text>
      </View>
      <View style={Styles.input}> 
            <RNTextInput placeholder={'username'} />
            <RNTextInput placeholder={'password'} />
      </View>

      <View style={Styles.validate}>
        <RNButton style={Styles.btn} textButton={"Fogot"} nameOfButton={"Username / Password?"} />
      </View>
      <View>
      <RNButtonSubmit/>
      </View>
      
      <View style={Styles.denied} >
          <RNButton nameOfButton={"Don't have an account"} />
      </View>
      <View style={Styles.signUp} >
          <RNButton nameOfButton={"SIGN UP NOW"} />
      </View>
     
        
      
</SafeAreaView>
  );
}

