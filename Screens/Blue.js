import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { Navigation } from 'react-native-navigation'

class Blue extends Component{



    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.warna}>B</Text>
                <Text style={styles.ini}>Ini adalah halaman BLUE</Text>

            </View>
        );
    }
}
export default Blue;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue'
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