import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import InputText from '../../components/InputText';

export default class Login extends Component{
    render(){
        return(
            <View style={styles.container}>
                {/* <Image
                    source={require('../../images/logo.png')}
                    style={styles.logo}>
                </Image> */}
                
                <InputText
                    type='user'
                    placeholder='Usuário'
                ></InputText>
                
                <InputText
                    type='lock'
                    placeholder='Senha'
                ></InputText>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CCCCCC',
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo: {
        width: 100,
        height: 100
    }
});