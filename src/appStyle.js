import {
    StyleSheet
} from 'react-native';

const configs = {
    empName: 'Mini Mercado Estrela',
}

const colors = {
    backgroundColor: '#2e382f',
    fontColor: '#FFF',
    placeholderColor: '#EFEFEF',
}

const style = StyleSheet.create({
    text: {
        fontFamily: 'sans-serif-light',
        color: (colors.fontColor),
    },
    
    container: {
        flex: 1,
        fontFamily: 'sans-serif-light',
        backgroundColor: '#2e382f',
    }
});

const appStyle = {
    configs: configs,
    colors: colors,
    style: style,
};

export default appStyle;