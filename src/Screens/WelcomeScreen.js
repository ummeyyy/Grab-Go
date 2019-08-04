import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button,
    KeyboardAvoidingView,
    Image,
    TouchableOpacity
} from "react-native";

import { Container, Content, Header, Form, Input, Item, Label } from 'native-base'
import { LinearGradient } from 'expo';

class WelcomeScreen extends Component {
    render() {
        return (
            
        <Container style={{ backgroundColor: 'white', flex: 1}}>
        <LinearGradient colors={['white','white', '#99C0D4','#729DB3','#2D637F','#163D51']} 
         style={{ flex:1,padding: 12, borderRadius:0 }}>

          <View style={styles.logoContainer}>
               <Image 
              style={styles.logo} 
              source={require('../Image/logo.png')}/>
              <Text style={styles.title}>  Grab & Go </Text>
              </View> 

            <View style={{marginBottom:140}}>             
                <TouchableOpacity 
                style={styles.button}
                onPress={() => this.props.navigation.navigate('SignIn')}>
                        <Text style={styles.buttonText}> LOGIN </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.button}
                onPress={() => this.props.navigation.navigate('SignUp')}>
                        <Text style={styles.buttonText}> SIGNUP </Text>
                </TouchableOpacity>
           </View>
        </LinearGradient>
        </Container>
        );
    }
}
export default WelcomeScreen;

const styles=StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent:'center'
       },
    logoContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    logo: {
        width:150,
        height:150,
        marginTop:45
    },  
    title:{
        opacity:0.9,
        fontWeight:'900',
        fontSize:20,
        color:'#042E44'    
    },
    //  buttonContainer:{
    //      backgroundColor:'#163d51',//'hsla(187, 100%, 40%,1)',
    //      paddingVertical:15,
    //      color:'#FFFFFF',
    //      margin:7
    //  },
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
    }   
})