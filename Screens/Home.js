import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,
} from "react-native";
import { Navigation } from 'react-native-navigation'

class Home extends Component{

    goToScreen = (screenName) => {
        Navigation.push(this.props.componentId, {
            component: {
                name: screenName
            }
        })
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.layer}>
                    <TouchableOpacity style={styles.red} onPress={() => this.goToScreen('Red')}>
                        <Text style={styles.text}>R</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.green} onPress={() => this.goToScreen('Green')}>
                        <Text style={styles.text}>G</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.layer}>
                    <TouchableOpacity style={styles.blue} onPress={() => this.goToScreen('Blue')}>
                        <Text style={styles.text}>B</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.yellow} onPress={() => this.goToScreen('Yellow')}>
                        <Text style={styles.text}>Y</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    text: {
        color: 'white',
        fontSize: 75,
    },
    layer: {
        flex: 1,
        flexDirection: 'row'
    },
    red: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    blue: {
        flex: 1,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'
    },
    green: {
        flex: 1,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
    },
    yellow: {
        flex: 1,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center'
    },
});