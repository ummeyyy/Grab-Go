import React, {Component} from 'react';
import {StyleSheet,View, TextInput, TouchableOpacity, Text, StatusBar,KeyboardAvoidingView} from 'react-native';
export default class LoginForm extends React.Component{
    render(){
        return(
            <View style={styles.container}>
            <StatusBar
                barStatus="light-content"
            />
                <TextInput style={styles.input}
                placeholder="Username or email"
                placeholderTextColor="white"
                returnKeyType="next"
                onSubmitEditing={ () => this.passwordInput.focus()}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                
                />
                <TextInput style={styles.input}
                secureTextEntry
                placeholder="Password"
                placeholderTextColor="white"
                returnKeyType="go"
                ref={(input) => {this.passwordInput=input}}
                
                
                />
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>
                        LOGIN
                    </Text>
                </TouchableOpacity>
            </View>

        );
    }
}

const styles=StyleSheet.create({
 container:{
    padding:10
 },
 input:{
    height:40,
    backgroundColor:'#163d51',//'hsla(187, 100%, 40%,1)',
    marginBottom:15,
    color:'#FFF',
    paddingHorizontal:10
 },
 buttonContainer:{
     backgroundColor:'#163d51',//'hsla(187, 100%, 40%,1)',
     paddingVertical:15,
     color:'#FFFFFF'
 },
 buttonText:{
     textAlign:'center',
     fontWeight:'800',
     color:'white'
 }
});
