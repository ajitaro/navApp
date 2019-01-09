import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { Navigation } from 'react-native-navigation'

class Green extends Component{



    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.warna}>G</Text>
                <Text style={styles.ini}>Ini adalah halaman GREEN</Text>

            </View>
        );
    }
}
export default Green;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green'
    },
    warna:{
        fontSize: 75,
        color: 'white'
    },
    ini:{
        fontSize: 20,
        color: 'white'
    },
});