import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const componentProps = {
    color: '#FFF',
    placeholderColor: '#EFEFEF',
    password: false
}

export default class InputText extends Component {
    constructor(props){
        super(props);

        if(this.props.type == 'lock'){
            componentProps.password = true;
        }
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.viewRow}>
                    <Icon name={this.props.type} size={25} color={componentProps.color}/>
                    <TextInput
                        style={styles.textInput}
                        placeholder={this.props.placeholder}
                        placeholderTextColor={componentProps.placeholderColor}
                        secureTextEntry={componentProps.password}
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

    viewRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    textInput: {
        flex: 1,
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 19,
        color: (componentProps.color),
        marginBottom: -5,
    },

    line: {
        height: 1.5,
        marginTop: -5,
        backgroundColor: (componentProps.color)
    }
});