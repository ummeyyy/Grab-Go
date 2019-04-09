import React, { Component } from 'react';
import {View,StyleSheet,Text, Image} from "react-native";
import { Container, Content, Header, Item, Input, Icon, Button } from 'native-base';
import { LinearGradient } from 'expo';

export default class BlackFade extends React.Component {
    render() {
      return (
        
         <View style={{ backgroundColor: 'white', flex: 1}}>
           <LinearGradient colors={['white','white', '#99C0D4','#729DB3','#2D637F','#163D51']} 
           style={{ flex:1,padding: 12, borderRadius:0 }}>
             
             <View style={styles.check}>
                <Image style={styles.stretch} source={require('../Image/check.png')}/> 
                </View>

                <View style={{flex: 1, height: 32, marginTop: -120}}>
                <Text style={styles.heading}> Purchase Successful!</Text>
                </View>
                <View style={{flex: 1, marginTop: -228}}>
                <Text style={styles.para}> You Successfully completed your shopping. 
                Your Receipt will be stored for upto two years. </Text>
                </View>
            </LinearGradient> 
           </View>
      );
    }
  }

  const styles=StyleSheet.create({
   check: {
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop:70,
          }, 
    stretch: {
      marginTop:2,
       width: 152,
       height: 152
    },
    heading: {
       color: '#042E44',
       fontFamily: 'AlNile-Bold',
       marginTop:5,
       fontSize: 30,
       textAlign: 'center'
       },
    para: {
        color: '#042E44',
        fontFamily: 'AlNile',
        marginTop:5,
        fontSize: 20,
        textAlign: 'center'
        }
   });
