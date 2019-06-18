import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

import EmpHeader from '../../components/EmpHeader';
import appStyle from '../../appStyle';
const dfStyle = appStyle.style;

const info = {
    footerHeight: 50
};

export default class Fluxo extends Component {

    constructor(props){
        super(props);
    }

    setFooterSize(height){
        info.footerHeight = height;
        alert('2 ' +info.footerHeight)
    }

    render(){
        return(
            <View style={dfStyle.container}>
                <EmpHeader program='Fluxo de Caixa'/>

                <ScrollView style={styles.center}>

                </ScrollView>

                <View
                    style={styles.footer}
                    onLayout={((event) => this.setFooterSize(event.nativeEvent.layout.height))}
                >
                    <View style={styles.info}>
                        <View>
                            <Text style={styles.infoTitle}>Produto mais vendido:</Text>
                            <Text style={dfStyle.text}>Bill</Text>
                        </View>
                        <View style={styles.infoValores}>
                            <Text style={styles.infoTitle}>Total:</Text>
                            <Text style={dfStyle.text}>R$ 35,93</Text>
                        </View>
                    </View>
                    <View style={styles.devinfo}>
                        <Text style={dfStyle.text}>Aplicativo desenvolvido por Gabriel Monteiro</Text>
                    </View>
                </View>

                {/* { && <Text>ada</Text>} */}
            
                <TouchableHighlight style={[
                    styles.addItem,
                    {
                        bottom: (info.footerHeight && alert('1 ' + info.footerHeight)),
                    }
                ]}>
                    <Text>...</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
    center: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        padding: 10,
    },

    footer: {
        justifyContent: 'flex-end',
    },

    info:{
        marginTop: 10,
        marginBottom: 30,

        marginLeft: 10,
        marginRight: 10,

        flexDirection: 'row',
    },
    
    infoValores: {
        flex: 1,
        alignItems: 'flex-end',
    },

    infoTitle: {
        ...dfStyle.text,
        fontWeight: 'bold',
        marginTop: 5
    },

    devinfo: {
        marginBottom: 10,
        alignItems: 'center',
    },

    addItem: {
        position: 'absolute',

        right: 10,
        // bottom: (info.footerHeight  && alert(3)),
        width: 50,
        height: 50,

        borderRadius: 100,

        backgroundColor: 'red',
    },
});