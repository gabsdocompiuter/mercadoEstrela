import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import appStyle from '../appStyle';
const dfStyle = appStyle.style;

const screens = [
    {
        screen: 'teste',
        description: 'Novidades',
        active: true
    },

    {
        screen: 'aaa',
        description: 'Caderno',
        active: false
    },

    {
        screen: 'Teste',
        description: 'Tela tela',
        active: false
    }
]

export default class EmpHeader extends Component {

    addTab(tab){
        return(
            <View key={tab.screen}>
                <TouchableOpacity style={styles.tabItem} onPress={() => this.changeTab(tab.screen)}>
                    <Text style={styles.tab}>{tab.description}</Text>
                    {tab.active && <View style={styles.line}/>}
                </TouchableOpacity>
            </View>
        )
    }

    screensTab(){
        return screens.map((data) =>{
            return this.addTab(data);
        })
    }

    changeTab(tab){
        // this.props.navigation.navigate(tab);
        alert(this.props.navigation)
        this.props.navigation.setPage(0);
    }

    render(){
        return (
            <View style={styles.header}>
                <View style={styles.logo}>
                    <Image style={styles.imageLogo} source={require('../assets/images/logo.png')}></Image>
                    <View style={styles.logoText}>
                        <Text style={styles.empName}>{appStyle.configs.empName}</Text>

                        <View style={styles.TabLines}>
                            {this.screensTab()}
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        marginTop: 7,
        marginBottom: 7,
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
    
    TabLines: {
        flexDirection: 'row',
    },

    tabItem: {
        marginRight: 7,
    },

    tab: {
        ...dfStyle.text,
        fontSize: 16,
    },

    line: {
        height: 1,
        backgroundColor: (appStyle.colors.fontColor)
    }
});