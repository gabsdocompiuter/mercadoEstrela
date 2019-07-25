import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import AppStyle from '../appStyle';
const dfStyle = AppStyle.style;

export default class Preload extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Image style={styles.imageLogo} source={require('../assets/images/logo.png')} />
                <Text style={styles.empName}>{AppStyle.configs.empName}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...dfStyle.container,
        justifyContent: 'center',
        alignItems: 'center',
    },

    imageLogo: {
        width: 120,
        height: 120,
    },

    empName:{
        ...dfStyle.text,
        fontSize: 24,
    },
})