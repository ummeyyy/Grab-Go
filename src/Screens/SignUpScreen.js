import React from 'react';
import {KeyboardAvoidingView , Text,StyleSheet, View, Image, TextInput, TouchableOpacity} from 'react-native';
import {LinearGradient} from 'expo';
import SignUpForm from '../components/SignUpForm';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';



export default class SignUpScreen extends React.Component {
  
    render() {
      return (
        <KeyboardAvoidingView behavior= "padding" style={styles.wrapper}>
          <Container style={{ backgroundColor: 'white', flex: 1}}>
              <LinearGradient colors={['white','white', '#99C0D4','#729DB3','#2D637F','#163D51']} 
               style={{ flex:1,padding: 12, borderRadius:0 }}>
              <SignUpForm  navigation={this.props.navigation}/>
              <TouchableOpacity 
                onPress = {() => {this.props.navigation.navigate('SignIn')}}
              >
              <Text style={styles.signupText11}> Already have an account ? Login!</Text>
              </TouchableOpacity>
              </LinearGradient>
                </Container>
        </KeyboardAvoidingView>
      );
    }
  }

  
const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
    },
    container: {
    flex: 1,
    backgroundColor: '#f23657',
    alignItems: 'center',
    //justifyContent: 'center'
  },
      signupText11:{
        paddingTop: 20,
        color: '#DEDEDE',
        alignSelf: 'center',
        fontWeight: '300',
        fontSize: 14
      }  
  });