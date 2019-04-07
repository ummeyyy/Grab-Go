import React, { Component } from 'react';
import{StyleSheet, View, Image, Text, KeyboardAvoidingView} from 'react-native';
export default class Login extends React.Component{
  render () {
     return (
         <KeyboardAvoidingView style={styles.container} behaviour="padding" enabled>
            <View style={styles.logoContainer}>
                 <Image 
                style={styles.logo} 
                source={require('../Image/logo.png')}/>
                <Text style={styles.title}>  Grab & Go </Text>
            </View>
            <View style={styles.formContainer}>

            </View>
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
    
    }
});


