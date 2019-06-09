import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

export default class Login extends Component{
    
    static navigationOptions = {
        title: 'CADASTRO'
    }
    
    render(){
        return(
            <View>
                <Text>Sign Up</Text>
            </View>
        );
    }
}