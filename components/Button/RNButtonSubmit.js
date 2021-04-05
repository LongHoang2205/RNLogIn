import React, { Component } from 'react';
import {View,Button} from 'react-native';
import Styles from '../TextInput/TextInputStyle';


class RNButtonSubmit extends Component {
    render() {
        return (
            <View >
                    <View style={Styles.signIn}>
                    <Button
                    style={Styles.button}
                        title="SIGN IN"
                        color='white'
                        />
                    </View>
            </View>
        );
    }
}

export default RNButtonSubmit;

