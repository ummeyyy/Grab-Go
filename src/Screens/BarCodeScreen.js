import React from 'react';
import { StyleSheet,ScrollView, Text, View, Image } from 'react-native';
// import {Button } from 'native-base';
import { Button } from '../components';

import { LinearGradient } from 'expo';

export default class BlackFade extends React.Component {
  static navigationOptions = {
    header:null
  }
    render() {
      return (
        <ScrollView style={styles.signUpContainer}>
         <View style={{ backgroundColor: '#5093255', flex: 1}}>
          <LinearGradient colors={['#163D51','#2D637F','#729DB3', '#99C0D4','white','white','white']} 
           style={{ flex:1,padding: 15, alignItems: 'center' }}>
             <View style = {{height:200,marginTop:50}}> 
               <Text style={styles.heading}>SCANNER</Text>
             </View> 
             <View> 
                <Image style={styles.stretch}
                source={require('../Image/loading.png')} />
             </View> 
             {/* <View style = {{backgroundColor: 'white', width:200, height:50, paddingBottom: 8,paddingTop: 5, 
             borderColor: '#164794', borderRadius:1, borderWidth:2 , shadowRadius:4, shadowOpacity:0.34
                       }}> */}
               <Button gradient
               style={{ marginTop: 10, width:"100%", }}
               onPress={()=> this.props.navigation.navigate('Barcodescan')}> 
                <Text style={{ textAlign: 'center', fontWeight:'700', fontSize:14, color: 'white' }}>Go to Bar Code Scanner</Text>
                </Button>

                <Button gradient
               style={{ marginTop: 10, width:"100%", }}
               onPress={()=> this.props.navigation.navigate('QRcodescan')}> 
                <Text style={{ textAlign: 'center', fontWeight:'700', fontSize:14, color: 'white' }}>Go to QR Code Scanner</Text>
                </Button>
             {/* </View>  */}
             <View>
               <Text style = {{marginTop:7,
                // fontFamily: 'Arial',
                 color: '#042E44', 
               textShadowColor:'#042E44', textShadowOffset: { width: 0.4, height: 0.4 }, 
               textShadowRadius: 1}}> GRAB, SCAN & GO </Text>
             </View>
             </LinearGradient> 
           </View>
           </ScrollView>
      );
    }
  }


 const styles=StyleSheet.create({
    button: {
      // fontFamily: 'Courier',
      color: '#164794',
      textAlign: 'center',
      fontWeight: 'bold',
      marginBottom:5
    },
    stretch: {
      marginTop:-150,
       width: 280,
       height: 300,
       marginBottom:30,
    },
    heading:{
      //  fontFamily: 'Arial',
       color: 'white',
       marginTop:10,
       fontSize: 39,
       textAlign: 'center',
       fontWeight: 'bold',
       }
   });