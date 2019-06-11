import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import appStyle from '../appStyle';
const dfStyle = appStyle.style;

export default class EmpHeader extends Component {
    render(){
        return (
            <View style={styles.header}>
                <View style={styles.logo}>
                    {/* <Icon
                        name='star'
                        size={50}
                        color='#FFF'
                    /> */}
                    <Image style={styles.imageLogo} source={require('../assets/images/logo.png')}></Image>
                    <View style={styles.logoText}>
                        <Text style={styles.empName}>{appStyle.configs.empName}</Text>

                        <Text style={styles.infoProgram}>{this.props.program}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        marginTop: 10,
        marginBottom: 10,
    },
    
    logo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    imageLogo: {
        width: 80,
        height: 80,
    },

    logoText: {
        ...dfStyle.text,
        marginLeft: -3,
        justifyContent: 'center'
    },
    
    empName: {
        ...dfStyle.text,
        fontSize: 25,
    },
    
    infoProgram: {
        ...dfStyle.text,
        fontSize: 20,
        marginTop: -8,
    },
});