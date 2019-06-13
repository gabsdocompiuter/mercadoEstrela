import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
} from 'react-native';

import appStyle from '../../appStyle';
const dfStyle = appStyle.style;

export default class News extends Component{
    render(){
        return(
            <View style={dfStyle.container}>
                <ScrollView style={styles.center}>

                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({

    center: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        padding: 10,
    },
});