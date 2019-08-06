import React from 'react';
import { StyleSheet, View, Image, TextInput, Dimensions,TouchableOpacity, keyboardType, Keyboard, ScrollView, ActivityIndicator } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { Ionicons } from '@expo/vector-icons';
import firebase from '../Firebase/firebase';
import { Button, Text } from '../components';

import { theme } from '../constants';
import '@firebase/firestore';

export default class SignUpForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fname: '',
      lname: '',
      phonenumber: '',
      email: '',
      password: '',
      Error: '',
      age: '',
      conpassword: '',
      loading: false
    }
    
  }

  signup = () => {
    const { fname, lname, phonenumber, email, password, age, conpassword } = this.state
    Keyboard.dismiss();
    this.setState({ loading: true });
    if (fname == "" && lname == "" && phonenumber == "" && email == "") {
      // alert('Enter Your credentials')
      this.setState({loading: false });
      this.setState({ Error: 'Enter Your credentials' })
    }
    else if (fname == "") {
      // alert('First name missing !')
      this.setState({loading: false });
      this.setState({ Error: 'First name missing !' })
    }
    else if (lname == "") {
      // alert('Last name is missing!')
      this.setState({loading: false });
      this.setState({ Error: 'Last name missing !' })
    }
    else if (phonenumber == "") {
      // alert('Please enter your Phone Number')
      this.setState({loading: false });
      this.setState({ Error: 'Please enter your Phone Number !' })
    }
    else if (age == "") {
      // alert('Please enter your Phone Number')
      this.setState({loading: false });
      this.setState({ Error: 'Please enter your age !' })
    }
    else if (email == "") {
      // alert('Email not found!')
      this.setState({loading: false });
      this.setState({ Error: 'Email not found' })
    }
    else if(password != conpassword){
      this.setState({loading: false });
      this.setState({ Error: 'password doesnot match' })
    }
    else {
      this.setState({ Error: '' })

      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((response) => {
          const dbh = firebase.firestore();

          dbh.collection("users").doc(""+response.user.uid).set({
            name: this.state.fname + ' ' + this.state.lname,
            email: this.state.email,
            age: Number(this.state.age),
            password: this.state.password,
            phonenumber: this.state.phonenumber
          }).then(res=> {
            const { currentUser } = firebase.auth()
            currentUser.sendEmailVerification(); 
            firebase.auth().signOut();
            // this.props.navigation.navigate('Auth');
            this.setState({loading: false });
            alert("Email sent to your account please verify and login");
          }).catch(err => console.log(err))
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
      <ScrollView style={styles.signUpContainer}>
        <Text style={styles.header}> Signup </Text>
        <View style={styles.logoContainer}>
                     <Image 
                    style={styles.logo} 
                    source={require('../Image/logo.png')}/>
                    <Text style={styles.title}>  Grab & Go </Text>
                    </View>
          <View>
            <Ionicons name={"ios-person"} size={28} color={'#0050a0'}
              style={styles.inputIcon} />
            <TextInput
              placeholder='First Name'
              style={styles.textInput}
              keyboardType='default'
              returnKeyType='next'
              autoCorrect={true}
              onSubmitEditing={() => this.refs.lastname.focus()}
              onChangeText={
                fname => this.setState({ fname })
              }
            />
          </View>
          <View>
            <Ionicons name={"ios-person"} size={28} color={'#0050a0'}
              style={styles.inputIcon} />
            <TextInput
              placeholder='Last Name'
              style={styles.textInput}
              keyboardType='default'
              returnKeyType='next'
              autoCorrect={true}
              ref={"lastname"}
              onSubmitEditing={() => this.refs.phoneno.focus()}
              onChangeText={
                lname => this.setState({ lname })
              }
            />
          </View>
          <View>
            <Ionicons name={"ios-phone-portrait"} size={28} color={'#0050a0'}
              style={styles.inputIcon} />
            <TextInput
              placeholder='Phone Number'
              style={styles.textInput}
              keyboardType="numbers-and-punctuation"
              returnKeyType="next"
              autoCorrect={false}
              ref={"phoneno"}
              onSubmitEditing={() => this.refs.age.focus()}
              onChangeText={
                phonenumber => this.setState({ phonenumber })
              }
            />
          </View>
          <View>
            <Ionicons name={"logo-reddit"} size={28} color={'#0050a0'}
              style={styles.inputIcon} />
            <TextInput
              placeholder='Age'
              style={styles.textInput}
              keyboardType= "numbers-and-punctuation"
              returnKeyType="next"
              autoCorrect={false}
              ref={"age"}
              onSubmitEditing={() => this.refs.password.focus()}
              onChangeText={
                age => this.setState({ age })
              }
            />
          </View>
          <View> 
            <Ionicons name={"md-create"} size={28} color={'#0050a0'}
              style={styles.inputIcon} />
            <TextInput
              placeholder='password'
              style={styles.textInput}
              autoCorrect={false}
              secureTextEntry={true}
              ref={"password"}
              onSubmitEditing={() => this.refs.conpassword.focus()}
              onChangeText={
                password => this.setState({ password })
              }
            />
          </View>
          <View> 
            <Ionicons name={"md-create"} size={28} color={'#0050a0'}
              style={styles.inputIcon} />
            <TextInput
              placeholder='Confirm'
              style={styles.textInput}
              autoCorrect={false}
              secureTextEntry={true}
              ref={"conpassword"}
              onSubmitEditing={() => this.refs.email.focus()}
              onChangeText={
                conpassword => this.setState({ conpassword })
              }
              />
          </View>
          <View>
              <Ionicons name={"ios-at"} size={28} color={'#0050a0'}
                style={styles.inputIcon} />
              <TextInput
                placeholder='Email Address'
                style={styles.textInput}
                keyboardType="email-address"
                returnKeyType="go"
                autoCorrect={false}
                ref={"email"}
                onChangeText={
                  email => this.setState({ email })
                }
              />
          </View>
        <Text style={{ color: 'red', textAlign: "center" }}>
          {this.state.Error}
        </Text>
        {/* <TouchableOpacity
          style={styles.button}
          onPress={this.signup}
        >
          <Text style={styles.btntext}> SignUp </Text>
        </TouchableOpacity> */}
         <Button gradient onPress={this.signup}>
              {loading ?
                <ActivityIndicator size="small" color="white" /> : 
                <Text bold white center>Signup</Text>
              }
            </Button>
        
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  signUpContainer: {
    width: width(100),
    height: height(100),
    alignSelf: 'stretch',
    paddingHorizontal: 20,
  },
  textInput: {
    alignSelf: 'stretch',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    marginBottom: 20,
    borderRadius: 10,
    paddingHorizontal: 50,
  },
  button: {
    alignSelf: 'flex-end',
    width: width ('40'),
    marginTop: 20,
    //backgroundColor: '#EF9A9A',
    alignItems: 'center',
    padding: 20,
    borderRadius: 70
  },
  btntext: {
    // color: '#E57373',
    color: "#0050a0",
    fontSize: 28,
    fontWeight: "normal"
  },
  inputIcon: {
    position: 'absolute',
    top: 10,
    left: 20
  },
  // signupText: {
  //   paddingTop: 40,
  //   color: '#0050a0',
  //   alignSelf: 'center',
  //   fontWeight: 'bold',
  //   fontSize: 16
  // },
  header: {
    paddingTop: 45,
    opacity:0.9,
    fontWeight:'700',
    fontSize: totalSize (6) ,
    color: '#042E44',
    marginBottom: 30,
    alignSelf: "center"
  },
  logoContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    marginBottom: 30,
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
    color:'#042E44'    
},
  nameInput: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  }
});
