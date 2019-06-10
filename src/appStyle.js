import {
    StyleSheet
} from 'react-native';

const appStyle = {
    configs: {
        empName: 'Mini Mercado Estrela'
    },

    colors: {
        backgroundColor: '#2e382f',
        fontColor: '#FFF',
        placeholderColor: '#EFEFEF',
    },

    style: StyleSheet.create({
        text: {
            fontFamily: 'sans-serif-light',
        },
        
        container: {
            flex: 1,
            fontFamily: 'sans-serif-light',
            backgroundColor: '#2e382f',
        }
    }),

};

export default appStyle;