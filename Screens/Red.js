import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { Navigation } from 'react-native-navigation'

class Red extends Component{



    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.warna}>R</Text>
                <Text style={styles.ini}>Ini adalah halaman RED</Text>

            </View>
        );
    }
}
export default Red;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
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