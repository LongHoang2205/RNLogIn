import React, { Component } from 'react';
import {Text,TouchableOpacity,View} from 'react-native';
import styles from '../TextInput/TextInputStyle';

class RNButton extends Component{
    render(){
        const { nameOfButton ,colorButton,textButton }= this.props
        return(
                <TouchableOpacity >
                <Text style={{fontSize:10,color:'green'}}>{textButton} {nameOfButton}</Text>
                </TouchableOpacity>
            
            
           
        );
    }
}
export default RNButton;