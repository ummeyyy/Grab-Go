import React from 'react';
import { StyleSheet, View, Image, TextInput, Dimensions,TouchableOpacity, keyboardType, Keyboard, ScrollView, ActivityIndicator } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { width, height, totalSize } from 'react-native-dimension';
import firebase from '../Firebase/firebase';
import { Button, Text } from '../components';
import '@firebase/firestore';

import { theme } from '../constants';

export default class LoginForm extends React.Component {
constructor(props){
  super(props)
  this.state = {
    email:'',
    password: '',
    loading: false,
    Error: ''
  }
}

  login = () => {
    const {email,password} = this.state
    Keyboard.dismiss();
    this.setState({ loading: true });
    if(email=="" && password==""){
      // alert('Enter Your Email & Password')
      this.setState({loading: false });
      this.setState({Error: 'Enter Your Email & Password'})
    }
    else if(email==""){
      // alert('Email not Found !')
      this.setState({loading: false });
      this.setState({Error: 'Email not Found !'})
    }
    else if(password==""){
      // alert('Password not Found !')
      this.setState({loading: false });
      this.setState({Error: 'Password not Found !'})
    }
    else {
      // this.setState({Error: ''})
      // this.props.navigation.navigate('Chat');
      firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        if(res.user.emailVerified==false){
          this.setState({loading: false });
          alert("email not verified")
        }
        else{
          this.setState({loading: false });
          this.props.navigation.navigate('App');
        }
      })
      .catch( 
        
        error =>{
          this.setState({loading: false });
          this.setState({ Error: error.message })
      
      },
        )

    }
  }
  render() {
    const { loading } = this.state;
    return (
      <View style={styles.formContainer}>
       
        <Text style={styles.header}> Login </Text>
        <View style={styles.logoContainer}>
                     <Image 
                    style={styles.logo} 
                    source={require('../Image/logo.png')}/>
                    </View>
                    <Text style={styles.title}>Grab & Go</Text>
                    
          <View>
        
        <Ionicons name={"ios-person"} size={28} color={'#0050a0'}
           style={styles.inputIcon}/>
        <TextInput 
          placeholder='Username/Email'
          style={styles.textInput}
          keyboardType="email-address"
          returnKeyType='next'
          autoCorrect={true}
          onSubmitEditing={()=> this.refs.txtPassword.focus()}
          onChangeText ={
            email => this.setState({email})
          }

        />
        </View>
        <View>
        <Ionicons name={"ios-lock"} size={28} color={'#0050a0'}
           style={styles.inputIcon}/>
        <TextInput
         
          placeholder='Password'
          secureTextEntry={true}
          style={styles.textInput}
          returnKeyType='go'
          autoCorrect={false}
          ref={"txtPassword"}
          onChangeText ={
            password => this.setState({password})
          }

        />
        </View>
           <Text style = {{color: 'red', textAlign: "center"}}>
         {this.state.Error}
    </Text>
        {/* <TouchableOpacity 
        style={styles.button}
        onPress = {this.login}
        >
          <Text style={styles.btntext}> login </Text>
        </TouchableOpacity> */}
        <Button gradient onPress={this.login}>
              {loading ?
                <ActivityIndicator size="small" color="white" /> : 
                <Text bold white center>Login</Text>
              }
              
            </Button>

        
         
      
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    alignSelf: 'stretch',
    paddingHorizontal: 20,
  },
  textInput: {
    alignSelf: 'stretch',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    marginBottom: 20,
    borderRadius: 10,
    paddingHorizontal:50,
  },
  button: {
    alignSelf: 'flex-end',
    width: '30%',
    marginTop: 20,
    //backgroundColor: '#EF9A9A',
    alignItems: 'center',
    padding: 20,
    borderRadius:70,
    },
    btntext: {
      color: '#0050a0',
      fontSize: 28,
      fontWeight: "normal"
    },
    inputIcon: {
      position: 'absolute',
      top: 10,
      left:20,
    },
    signupText:{
      paddingTop: 40,
      color: '#0050a0',
      alignSelf: 'center',
      fontWeight: 'bold',
      fontSize: 16
    },
    header: {
      paddingTop: 15,
      opacity:0.9,
      fontWeight:'700',
      fontSize: totalSize (6) ,
      color: '#042E44',
      marginBottom:80,
      alignSelf: "center"
    },
    logoContainer:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      marginBottom: 100,
  },
  logo: {
      width:85,
      height:85,
  },  
  signupText:{
      paddingTop: 20,
      color: '#DEDEDE',
      alignSelf: 'center',
      fontWeight: '300',
      fontSize: 14
    },    
    title:{
      opacity:0.9,
      fontWeight:'900',
      fontSize:20,
      color:'#042E44' ,
      justifyContent:'center',
      marginTop: -55,
      marginBottom: 45,
      marginLeft:110
  }
});
