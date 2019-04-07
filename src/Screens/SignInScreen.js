import React, { Component } from 'react';
import{StyleSheet, View, Image, Text, KeyboardAvoidingView,TextInput, StatusBar, TouchableOpacity,AsyncStorage} from 'react-native';

export default class SignInScreen extends React.Component{

    signIn = async () => {
        await AsyncStorage.setItem('userToken', 'varun')

        this.props.navigation.navigate('App')
    }


  render () {
     return (
         <KeyboardAvoidingView style={styles.container} behaviour="padding" enabled>
            <View style={styles.logoContainer}>
                 <Image 
                style={styles.logo} 
                source={require('../Image/logo.png')}/>
                <Text style={styles.title}>  Grab & Go </Text>
            </View>
            {/* <View style={styles.formContainer}>

            </View> */}

{/* ======================LOGIN FORM============================== */}

<View style={styles.form}>
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
                <TouchableOpacity style={styles.buttonContainer} onPress={this.signIn}>
                    <Text style={styles.buttonText}>
                        LOGIN
                    </Text>
                </TouchableOpacity>
            </View>
{/* ===============SIGNUP BUTTON =================== */}
        {/* <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>
              SIGN UP
          </Text>
        </TouchableOpacity> */}
         </KeyboardAvoidingView>


     );
    }
}

const styles=StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#163d51'//'hsla(187, 100%, 40%,1)' // 'rgba(129, 207, 224, 1)'//#d98c8c 'hsla(187, 100%, 40%,1)'
        
    },
    logoContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        flexGrow:1
    
    },
    logo: {
        width:150,
        height:150,
        marginRight:10
    },
    title:{
        opacity:0.7,
        fontWeight:'900',
       // borderWidth:1.5,
        borderRadius:2,
        fontSize:20,
        color:'white'//'#ff6200'//'hsla(187, 100%, 40%,1)'
        //borderStyle:'solid'
    
    },
    form:{
        padding:10,
        backgroundColor:'white',
        marginBottom:100
        
     },
     input:{
        height:40   ,
        backgroundColor:'#163d51',//'hsla(187, 100%, 40%,1)',
        marginBottom:15,
        color:'#FFF',
        paddingHorizontal:10
     },
     buttonContainer:{
         backgroundColor:'#163d51',//'hsla(187, 100%, 40%,1)',
         paddingVertical:15,
         color:'#FFFFFF',
         margin:7
     },
     buttonText:{
         textAlign:'center',
         fontWeight:'800',
         color:'white',
         margin:2
     }
    
})