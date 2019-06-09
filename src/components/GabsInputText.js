import React, { Component } from 'react';
import {
    View,
    TextInput,
    StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import appStyle from '../appStyle';

const componentProps = {
    fontColor: appStyle.colors.fontColor,
    placeholderColor: appStyle.colors.placeholderColor,
    password: false
}

export default class GabsInputText extends Component {
    constructor(props){
        super(props);

        componentProps.password = this.props.type == 'lock';
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
                            name={this.props.type}
                            size={25}
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
        width: 25,
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
        marginTop: -4,
        backgroundColor: (componentProps.fontColor)
    }
});