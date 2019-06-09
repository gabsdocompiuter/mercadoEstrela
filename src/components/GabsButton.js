import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import appStyle from '../appStyle';

const componentProps = {}

export default class GabsInputText extends Component {
    constructor(props){
        super(props);

        if(this.props.inverted == true){
            componentProps.fontColor = appStyle.colors.backgroundColor;
            componentProps.bgColor = appStyle.colors.fontColor;
            componentProps.borderColor = appStyle.colors.fontColor;
        }
        else{
            componentProps.bgColor = 'transparent';
            componentProps.fontColor = appStyle.colors.fontColor;
            componentProps.borderColor = appStyle.colors.fontColor;
        }
    }

    render(){
        return (
            <View style={[
                styles.container,
                this.props.style
            ]}>
                <TouchableOpacity onPress={this.props.onPress}>
                    <View style={[
                        styles.button,
                        {
                            borderColor: (componentProps.borderColor),
                            backgroundColor: (componentProps.bgColor),
                        }
                    ]}>
                        <Text style={[
                            appStyle.style.text,
                            styles.buttonText,
                            {
                                color: (componentProps.fontColor),
                            }
                        ]}>{this.props.text}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

    },
    
    button: {
        padding: 10,
        height: 40,
        aspectRatio: 5,

        borderWidth: 1,
        borderRadius: 20,

        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        fontSize: 20,
    }
});