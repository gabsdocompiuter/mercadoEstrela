import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
} from 'react-native';

import NewsItem from '../../components/NewsItem'
import appStyle from '../../appStyle';
const dfStyle = appStyle.style;

export default class News extends Component{
    render(){
        return(
            <View style={dfStyle.container}>
                <ScrollView style={styles.center}>
                    <NewsItem
                        imageSource='https://imagens.simplo7.net/static/3230/sku/thumb_legging-legging-mulheres-altas-legging-cinza-escuro-mulheres-altas--p-1557232196722.jpg'
                        name='Legging Cinza'
                        previewDescription='Legging tamanho 40 cinza super confortável'
                        description='Legging tamanho 40 cinza super confortável mesmo, muito boa'
                    />
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