import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import appStyle from '../appStyle';
const dfStyle = appStyle.style;

export default class ItemCaderno extends Component {
    render(){
        return(
            <View style={this.props.style}>
                <Text style={styles.title}>{this.props.product}</Text>
                <View style={styles.info}>
                    <Text style={styles.subInfo}>{this.props.date}</Text>

                    <View style={styles.price}>
                        <Text style={styles.subInfo}>R$ {this.props.price}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    info: {
        flexDirection: 'row',
    },

    title: {
        ...dfStyle.text,
        fontSize: 24,
    },

    subInfo: {
        ...dfStyle.text,
        fontSize: 16,
    },

    price: {
        flex: 1,
        alignItems: 'flex-end'
    },
});