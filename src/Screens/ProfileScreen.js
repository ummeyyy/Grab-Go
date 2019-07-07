
import React, {Component} from 'react';
import {StyleSheet,View, Text, Image, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo';

export default class Profile extends Component {

    render(){
        return(
            <View style={styles.container}>
                <View style={{ backgroundColor: 'white', flex: 1}}>
                <LinearGradient colors={['white','white', '#99C0D4','#729DB3','#2D637F','#163D51']} 
                style={{ flex:1, borderRadius:0 }}>
       {/* ===================== END OF BACKGROUND ========================== */}
            <View style={styles.header}></View>
            <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
            <View style={styles.body}>
              <View style={styles.bodyContent}>
                <Text style={styles.name}>JOHN DOE</Text>
                <Text style={styles.info}>Member / 30 </Text>
                <Text style={styles.description}> A user from Karachi, frequents Imtiaz, Naheed and Agha's.</Text>
                
                <TouchableOpacity style={styles.buttonContainer}>
                  <Text style={styles.text1}>Previous Purchases</Text>  
                </TouchableOpacity>              
                <TouchableOpacity style={styles.buttonContainer}>
                  <Text style={styles.text1}>Sign Out</Text> 
                </TouchableOpacity>
              </View>
          </View>
        </LinearGradient>      
            </View>
            </View>
      );
    }
  }
  
  const styles=StyleSheet.create({
    header:{
      backgroundColor: "#042E44",
      height:170,
    },
    container:{
        flex: 1
     },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
      alignSelf:'center',
      position: 'absolute',
      marginTop:100
    },
    name:{
      fontSize:28,
      color:"#042E44",
      fontWeight:'600',
      fontFamily: 'AlNile'
    },
    body:{
      marginTop:60,
    },
    bodyContent: {
      flex: 1,
      alignItems: 'center',
      padding:30,
    },
    info:{
      fontSize:16,
      color: "#042E44",
      fontFamily: 'AlNile',
      marginTop:10
    },
    description:{
      fontSize:16,
      color: "#042E44",
      marginTop:20,
      fontFamily: 'AlNile',
      textAlign: 'center'
    },
    text1: {
        color: 'white',
        fontFamily: 'AlNile',
        fontSize: 17,
        textAlign: 'center',
        },
    buttonContainer: {
      marginTop:10,
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
      backgroundColor: "#042E44",
    },
  });  