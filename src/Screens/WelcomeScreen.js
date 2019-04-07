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

class WelcomeScreen extends Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behaviour="padding" enabled>
            <View style={styles.logoContainer}>
                 <Image 
                style={styles.logo} 
                source={require('../Image/logo.png')}/>
                <Text style={styles.title}>  Grab & Go </Text>
            </View>
           


            <View style={styles.form}>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('SignIn')}>
                    <Text style={styles.buttonText}>
                        LOGIN
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('SignUp')}>
                    <Text style={styles.buttonText}>
                        SIGNUP
                    </Text>
                </TouchableOpacity>



            </View>

            </KeyboardAvoidingView>
        );
    }
}
export default WelcomeScreen;

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