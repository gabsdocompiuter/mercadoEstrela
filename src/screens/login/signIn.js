import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    ScrollView,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import GabsInputText from '../../components/GabsInputText';
import GabsButton from '../../components/GabsButton';
import appStyle from '../../appStyle';
const dfStyle = appStyle.style;

export default class Login extends Component{

    render(){
        return(
            <View style={[
                dfStyle.container,
                styles.container
            ]}>
                <View style={styles.logo}>
                    <Icon
                        name='star'
                        size={75}
                        color='#FFF'
                    />
                    <Text style={styles.logoText}>{appStyle.configs.empName}</Text>
                </View>

                <ScrollView>
                    <View style={styles.loginArea}>
                        <GabsInputText
                            type='username'
                            placeholder='Usuário/CPF'
                            style={styles.input}
                        ></GabsInputText>
                        
                        <GabsInputText
                            type='password'
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
                            <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>

                <View style={dfStyle.footer}>
                    <View style={dfStyle.devInfo}>
                        <Text style={dfStyle.text}>Aplicativo desenvolvido por Gabriel Monteiro</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const windowWidth = Dimensions.get('window').width;

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
        ...dfStyle.text,
        marginLeft: 10,
        fontSize: 25,
        width: 100,
    },
    
    loginArea: {
        width: (windowWidth),
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    input: {
        width: 270,
        margin: 10,
    },

    buttonArea: {
        margin: 20,
    },

    button: {
        margin: 5,
    },

    forgotPassword: {
        ...dfStyle.text,
        marginBottom: 25,
        fontSize: 14,
    },

});