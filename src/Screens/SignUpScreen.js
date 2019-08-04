import React, { Component } from 'react';
import{StyleSheet, View, Image, Text, KeyboardAvoidingView, TextInput, TouchableOpacity,AsyncStorage,ActivityIndicator} from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { LinearGradient } from 'expo';
import * as firebase from 'firebase';

//initializing firebase
const firebaseConfig = {
  apiKey: "AIzaSyAOnNkALQ9rZzc-wNacJ4lXjLjE_aQnr-A",
  authDomain:  "reactfirebase-a3d77.firebaseapp.com",
  databaseURL: "https://reactfirebase-a3d77.firebaseio.com",
  projectId: "reactfirebase-a3d77",
  storageBucket: "",
};

// firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {

    // signIn = async () => {
    //     await AsyncStorage.setItem('userToken', 'varun')

    //     this.props.navigation.navigate('App')
    // }
 
    constructor(props) {
        super(props)

        this.state = ({
            email: '',
            password: '',
            errorMessage:'',
            loading:false
            // fullname: '',
            // contactnumber: ''
        })
    }

    onLoginSuccess = () => {
        this.setState({
          email: '', password: '', error: '', loading: false
        })
      }

      renderButton = () => {
        if (this.state.loading) {
          return(
              <View style={styles.spinnerStyle}>
                 <ActivityIndicator size={"small"} />
              </View>
          );
        }
        return (
            <TouchableOpacity style={styles.button}
               
            onPress={() => this.signUpUser(this.state.email.trim(), this.state.password,
            
            //  this.state.fullname,this.state.contactnumber/*
            )}
    >
    {/* <Text style={{ fontWeight:'700', fontSize:17, color: 'white' }}> Sign Up</Text> */}
    <Text style={styles.buttonText}> SIGNUP </Text>
    </TouchableOpacity>
        );
      }

    signUpUser = (email, password) => {
        console.log(email)

       

            // if (this.state.password.length < 6) {
            //     alert("Please enter atleast 6 characters")
            //     return;
            // }
            this.setState({ errorMessage: '', loading: true })

            firebase
            .auth()
            .createUserWithEmailAndPassword(email, password) 
            .then(() => 
            this.onLoginSuccess()
            )
            .then(() => 
            this.props.navigation.navigate('HomeScreen')
            )
            .catch(error => this.setState({ errorMessage: error.message ,loading:false}))
        
        
    }

    render() {
        return (

            <KeyboardAwareScrollView
            style={{ backgroundColor: 'transparent' }}
            resetScrollToCoords={{ x: 0, y: 0 }}
            contentContainerStyle={styles.LinearGradient}
            scrollEnabled={false}
          >

        <Container style={{ backgroundColor: 'white', flex: 1}}>
          <LinearGradient colors={['white','white', '#99C0D4','#729DB3','#2D637F','#163D51']} 
           style={{ flex:1,padding: 12, borderRadius:0 }}>

           <View style={styles.logoContainer}>
                 <Image 
                style={styles.logo} 
                source={require('../Image/logo.png')}/>
                <Text style={styles.title}>  Grab & Go </Text>
                </View> 

 
            <View style={styles.container}>
                <Form>
                {/* <Item floatingLabel>
                        <Label style={{color:'white'}}>Full Name</Label>
                        <Input style ={{color: 'white'}}
                            autoCorrect={false}
                            autoCapitalize="words"
                            onChangeText={(fullname) => this.setState({ fullname })}
                        />
                    </Item>

                <Item floatingLabel>
                        <Label style={{color:'white'}}>Contact Number</Label>
                        <Input style ={{color: 'white'}}
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={(contactnumber) => this.setState({ contactnumber })}
                        />
                    </Item> */}

                <Item floatingLabel>
                        <Label style={{color:'white'}}>Email</Label>
                        <Input style ={{color: 'white'}}
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={(email) => this.setState({ email })}
                        />
                    </Item>

                <Item floatingLabel>
                        <Label style={{color:'white'}}>Password</Label>
                        <Input style ={{color: 'white'}}
                            secureTextEntry={true}
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={(password) => this.setState({ password })}
                        />
                    </Item>
                 <View style={{marginBottom:220}}>  
                 <View style = {{marginLeft:17,marginTop:20}}>
                 <Text style = {{color:'red',fontWeight:'bold',fontSize:25}} >{this.state.errorMessage}</Text>
                </View>
                {this.renderButton()}
                </View>
                </Form>
                </View>

            </LinearGradient>
            </Container>
    </KeyboardAwareScrollView>
    );
}
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent:'center'
       },
    buttonText:{
        textAlign:'center',
        fontWeight:'800',
        color:'#2D637F',
        margin: 8
    },
   button:{
       alignItems: 'center',
       backgroundColor: 'white',
       height:50,
       padding: 10,
       marginTop: 20,
       // marginLeft: 5,
       // marginRight: 5,
       borderRadius: 50,
       color:'white'    
   },  
     logoContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    logo: {
        width:110,
        height:110,
        marginTop:-95
    },      
    title:{
        opacity:0.9,
        fontWeight:'900',
        fontSize:20,
        color:'#042E44'    
    }
});