import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
} from 'react-native';

import ViewPager from "@react-native-community/viewpager";

import appStyle from '../../appStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
const dfStyle = appStyle.style;

import News from './news';
import Caderno from './caderno';

const screens = [
    {
        key: 0,
        description: 'Novidades',
        active: true
    },

    {
        key: 1,
        description: 'Caderno',
        active: false
    },
]

const linhas = [];

export default class Client extends Component{

    constructor(props){
        super(props);
        this.state = {
            page: 0,
        }
    }

    screensTab(){
        return screens.map((data) =>{
            return this.addTab(data);
        })
    }

    addTab(tab){
        return(
            <View key={tab.key}>
                <TouchableOpacity style={styles.tabItem} onPress={() => this.changeTab(tab.key)}>
                    <Text style={styles.tab}>{tab.description}</Text>
                    <View
                        style={{
                            height: 1,
                            backgroundColor: (this.state.page == tab.key ? appStyle.colors.fontColor : 'transparent')
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    changeTab(tab){
        this.viewPager.setPage(tab);
        this.setState({page : tab});
    }

    render(){
        return(
            <View style={dfStyle.container}>
                <View style={styles.header}>
                    <View style={styles.logo}>
                        <Image style={styles.imageLogo} source={require('../../assets/images/logo.png')}></Image>
                        <View style={styles.logoText}>
                            <Text style={styles.empName}>{appStyle.configs.empName}</Text>

                            <View style={styles.TabLines}>
                                {this.screensTab()}
                            </View>
                        </View>
                    </View>
                </View>

                <ViewPager
                    style={styles.viewPager}
                    initialPage={0}
                    ref={viewPager => this.viewPager = viewPager}
                    onPageSelected={e => this.setState({page: e.nativeEvent.position})}
                >
                    <View key="1">
                        <News/>
                    </View>

                    <View key="2">
                        <Caderno/>
                    </View>
                </ViewPager>

                <View style={styles.footer}>
                    <View style={styles.devInfo}>
                        <Text style={dfStyle.text}>Aplicativo desenvolvido por Gabriel Monteiro</Text>
                    </View>
                </View>

            </View>
        );
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

    viewPager: {
        flex: 1
      },
    
    footer: {
        justifyContent: 'flex-end',
    },

    devInfo: {
        marginBottom: 10,
        alignItems: 'center',
    }
});