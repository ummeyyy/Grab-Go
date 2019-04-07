import React, { Component } from 'react';
import{StyleSheet, View, Image, Text, KeyboardAvoidingView, TextInput, TouchableOpacity,AsyncStorage} from 'react-native';

export default class SignUpScreen extends React.Component{

    signIn = async () => {
        await AsyncStorage.setItem('userToken', 'varun')

        this.props.navigation.navigate('App')
    }

  render () {
     return (
       
     
     <View style={styles.container}>
                <View style={styles.signup}>

                    <Text style={styles.header}>  SignUp </Text>

                    <TextInput style={styles.textinput} 
                    placeholder="User Name"  
                    underlineColorAndroid={'transparent'} 
                    />

                    <TextInput style={styles.textinput} 
                    placeholder="Your Email"  
                    underlineColorAndroid={'transparent'} 
                    
                    />  

                    
                    <TextInput style={styles.textinput} 
                    placeholder="Password"  
                    underlineColorAndroid={'transparent'}
                    secureTextEntry={true} 
                    />  

                    <TouchableOpacity style={styles.button} onPress={this.signIn}>
                        <Text style={styles.btntext}> Sign Up</Text>
                    </TouchableOpacity>


                </View>
                </View>
        
     );
    }
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
       justifyContent: 'center',
       paddingLeft:60,
       paddingRight:60,
    //alignItems: 'center',
      backgroundColor: '#163d51',
     },
    signup: {
            alignSelf: 'stretch'
    },
    header:{
        fontSize:24,
        color: '#fff',
        paddingBottom:10,
        marginBottom:40,
        borderBottomColor: '#199187',
        borderBottomWidth:1
    },
    textinput:{
        alignSelf:'stretch',
        height:40,
        marginBottom:30.,
        color:'#fff',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth:1
    },
    button:{
        alignSelf:'stretch',
        alignItems:'center',
        padding:20,
        backgroundColor:'#fff',
        marginTop:30
    },
    btntext:{
        color:'#163d51',
        fontWeight: 'bold'
    }, logoContainer:{
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

});