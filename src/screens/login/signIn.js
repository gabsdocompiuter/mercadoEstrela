import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import appStyle from '../../appStyle';
import GabsInputText from '../../components/GabsInputText';
import GabsButton from '../../components/GabsButton';


export default class Login extends Component{

    static navigationOptions = {
        title: 'LOGIN'
    }

    render(){
        return(
            <View style={[
                appStyle.style.container,
                styles.container
            ]}>
                <View style={styles.logo}>
                    <Icon
                        name='star'
                        size={75}
                        color='#FFF'
                    />
                    <Text style={[
                        appStyle.style.text,
                        styles.logoText
                    ]}>Mercado Estrela</Text>
                </View>

                <View style={styles.loginArea}>
                    <GabsInputText
                        type='user'
                        placeholder='Usuário/CPF'
                        style={styles.input}
                    ></GabsInputText>
                    
                    <GabsInputText
                        type='lock'
                        placeholder='Senha'
                        style={styles.input}
                    ></GabsInputText>

                    <View style={styles.buttonArea}>
                        <GabsButton
                            style={styles.button}
                            text='Login'
                            inverted={true}                        
                        />
                        <GabsButton
                            style={styles.button}
                            text='Cadastrar-se'
                            onPress={() => this.props.navigation.navigate('signUp')}
                        />
                    </View>

                    <TouchableOpacity>
                        <Text style={[
                            appStyle.style.text,
                            styles.forgotPassword
                        ]}>Esqueceu sua senha?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    
    logo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        marginTop: 50,
    },
    
    logoText: {
        marginLeft: 10,
        fontSize: 25,
        color: (appStyle.colors.fontColor),
        width: 100,
    },
    
    loginArea: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    input: {
        margin: 10,
    },

    buttonArea: {
        margin: 20,
    },

    button: {
        margin:10,
    },

    forgotPassword: {
        marginBottom: 25,
        fontSize: 14,
        color: (appStyle.colors.fontColor),
    },
});