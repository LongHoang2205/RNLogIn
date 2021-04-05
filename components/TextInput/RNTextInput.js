import React, { Component } from 'react';
import {View, TextInput} from 'react-native';
import Styles from './TextInputStyle';

class RNTextInput extends Component{
    render(){
        const {placeholder}=this.props
        return(
            <View style={Styles.container}> 
               <TextInput placeholder={placeholder} style={Styles.textInput}>
                </TextInput>         
            </View>
        )
    }
}
export default RNTextInput;