import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { Navigation } from 'react-native-navigation'

class Yellow extends Component{



    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.warna}>Y</Text>
                <Text style={styles.ini}>Ini adalah halaman YELLOW</Text>

            </View>
        );
    }
}
export default Yellow;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow'
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