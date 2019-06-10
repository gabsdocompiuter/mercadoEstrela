import React, { Component } from 'react';
import {
    View,
    TextInput,
    StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import appStyle from '../appStyle';

const componentProps = {
    icon: '',
    keyboardType: 'default',
    fontColor: appStyle.colors.fontColor,
    placeholderColor: appStyle.colors.placeholderColor,
    password: false
}

export default class GabsInputText extends Component {
    constructor(props){
        super(props);

        componentProps.password = this.props.type == 'password';
        componentProps.keyboardType = 'default';

        switch(this.props.type){
            case 'cpf':
                componentProps.icon = 'id-badge';
                break;
            case 'email':
                componentProps.icon = 'at';
                componentProps.keyboardType = 'email-address';
                break;
            case 'name':
                componentProps.icon = 'address-card';
                break;
            case 'username':
                componentProps.icon = 'user';
                break;
            case 'password':
                componentProps.icon = 'lock';
                break;
            default:
                componentProps.icon = 'info';
                break;
        }

    }

    render(){
        return (
            <View style={[
                styles.container,
                this.props.style
            ]}>
                <View style={styles.viewRow}>
                    <View style={styles.icon}>
                        <Icon
                            size={25}
                            name={componentProps.icon}
                            color={componentProps.fontColor}
                        />
                    </View>
                    <TextInput
                        style={[
                            appStyle.style.text,
                            styles.textInput,
                        ]}
                        placeholder={this.props.placeholder}
                        placeholderTextColor={componentProps.placeholderColor}
                        secureTextEntry={componentProps.password}
                        keyboardType={componentProps.keyboardType}
                    ></TextInput>
                </View>
                <View style={styles.line}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 200
    },

    icon: {
        width: 30,
        alignItems: 'center',
    },
    
    viewRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    textInput: {
        flex: 1,
        fontSize: 19,
        color: (componentProps.fontColor),
        marginBottom: -5,
    },

    line: {
        height: 1,
        // marginTop: -3,
        backgroundColor: (componentProps.fontColor)
    }
});