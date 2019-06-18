import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Modal,
    Dimensions,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    TouchableWithoutFeedback,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import appStyle from '../appStyle';
const dfStyle = appStyle.style;

export default class NewsItem extends Component {
    constructor(props){
        super(props);

        this.state = {
            modalVisible: false
        }
    }

    modalVisible(visible){
        let s = this.state;
        s.modalVisible = visible;
        this.setState(s);
    }

    render(){
        return (
            <View>
                <TouchableOpacity
                    onPress={() => this.modalVisible(true)}
                    style={styles.container}
                >
                    <Image
                        source={{uri: this.props.imageSource}}
                        style={styles.img}
                        resizeMode='center'
                    />
                    <View style={styles.desc}>
                        <Text style={styles.title}>{this.props.name}</Text>
                        <Text style={styles.text}>{this.props.previewDescription}</Text>
                    </View>
                </TouchableOpacity>

                <Modal
                    animationType='fade'
                    visible={this.state.modalVisible}
                    transparent={true}
                >
                    <TouchableOpacity
                        style={modal.modal}
                        activeOpacity={1}
                        onPressOut={() => this.modalVisible(false)}
                    >
                        <TouchableWithoutFeedback>
                            <View style={modal.container}>
                                <ScrollView>
                                    <View>
                                        <Image
                                            source={{uri: this.props.imageSource}}
                                            style={modal.image}
                                            resizeMode='center'
                                        />
                                        <Text style={modal.title}>{this.props.name}</Text>
                                        <Text style={modal.desc}>{this.props.description}</Text>
                                    </View>
                                </ScrollView>
                            </View>
                        </TouchableWithoutFeedback>
                    </TouchableOpacity>
                </Modal>
            </View>
        )
    }
}

const window = Dimensions.get('window').height;

const modal = StyleSheet.create({
    modal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        borderRadius: 10,
        height: (window * 0.6),
        width: '85%',

        padding: 10,
    },

    image: {
        alignSelf: 'center',
        width: '80%',
        height: 10,
    },

    title: {
        ...dfStyle.text,
        fontSize: 22,
    },

    desc: {
        ...dfStyle.text,
        fontSize: 20,
    }
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(200, 200, 200, 0.1)',
        width: '94%',
        marginLeft: '3%',
        borderRadius: 7,

        flexDirection: 'row',

        padding: 10,
    },
    
    img: {
        width: 90,
        height: 90,
    },
    
    desc: {
        flex: 1,
        marginLeft: 5,
        marginRight: 5,

        justifyContent: 'center',

    },

    title: {
        ...dfStyle.text,
        fontSize: 22,
    },

    text: {
        ...dfStyle.text,
        fontSize: 16,
    }
})