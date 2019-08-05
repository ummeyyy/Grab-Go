import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    AsyncStorage,
    ActivityIndicator
} from "react-native";

import firebase from '../Firebase/firebase';

class AuthLoadingScreen extends Component {
    constructor(){
        super()
        // this.loadApp()
    }
     loadApp = async()=>{
        const userToken = await AsyncStorage.getItem('userToken')
        this.props.navigation.navigate(userToken ? 'App' : 'Auth')
    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
          this.props.navigation.navigate(user ? 'HomeScreen' : 'Welcome')
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator/>
            </View>
        );
    }
}
export default AuthLoadingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});