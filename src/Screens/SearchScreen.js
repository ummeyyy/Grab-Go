import React, { Component } from 'react';
import {View,StyleSheet,TouchableOpacity,Text, Image,ScrollView} from "react-native";
import { Container, Header, Item, Input, Icon, Button } from 'native-base';
import { LinearGradient } from 'expo';

export default class BlackFade extends React.Component {
    render() {
      return (
        
         <View style={{ backgroundColor: 'white', flex: 1}}>
           <LinearGradient colors={['white','white', '#99C0D4','#729DB3','#2D637F','#163D51']} 
           style={{ flex:1, borderRadius:0 }}>

{/* -------------------------SEARCH BAR--------------------------- */}


             <View style = {{height:200,marginTop:30}}> 
               <Text style={styles.heading}>Search</Text>
             </View> 
             <View  style = {styles.searchbar}>
                <View searchBar rounded>
                  <Item>
                    <Icon style = {{paddingBottom:8,paddingLeft:10, margin:5}} name="ios-search" />
                    <Input style = {{paddingBottom:12}} placeholder="Looking for?" />
                    <Button transparent style = {{paddingBottom:12}}>
                      <Text style = {styles.searchbutton}>Search</Text>
                    </Button>
                  </Item>
                </View>
               </View>
               <View style = {{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', height: 100}}>
                  <Button light transparent>
                      <Text style = {styles.button}>RECENTLY VIEWED</Text>
                  </Button>
                  <Button light transparent>
                      <Text style = {styles.button}>CLEAR</Text>
                  </Button>
               </View> 


{/* -----------------------SEARCH PRODUCT RESULTS------------------------- */}

               <View style = {{ flex: 1, flexDirection: 'row', justifyContent: 'space-between',  height: 59,
      width: 175, marginTop:-290}}>
                <Button bordered info style={{ borderColor: '515C6F', paddingTop: 5,
                 paddingBottom: 5, height: 59, width: 185, justifyContent: "center", marginTop:5, marginLeft:5}}>
                 <View style = {{ flex: 1, flexDirection: 'row'}}>
                     <Image style={styles.stretch}
                source={require('../Image/scarf.png')} /> 
                <View>
                     <Text style = {styles.result}>Red Cotton Scarf</Text>
                </View>
                </View>
                <View>
                     <Text style = {{marginTop:16, marginLeft:-140, fontSize: 15,color: '#515C6F'}}>Rs: 115</Text>
                </View>
                </Button>
               

               <View style = {{ flex: 2, flexDirection: 'row', alignContent: 'space-between',  height: 59,
      width: 175, marginTop:0, marginLeft:8}}>
                <Button bordered info style={{ borderColor: '515C6F', paddingTop: 5,
                 paddingBottom: 5, height: 59, width: 185, justifyContent: "center", marginTop:5}}>
                 <View style = {{ marginLeft:7, flex: 1, flexDirection: 'row'}}>
                     <Image style={styles.stretch}
                source={require('../Image/backpack.png')} /> 
                <View>
                     <Text style = {styles.result}>Hiking Bagpack</Text>
                </View>
                </View>
                <View>
                     <Text style = {{marginTop:16, marginLeft:-135, fontSize: 15,color: '#515C6F'}}>Rs: 1550</Text>
                </View>
                </Button>
               </View>

               </View>

 

             </LinearGradient> 
           </View>
      );
    }
  }
  const styles=StyleSheet.create({
    searchbutton: {
      color: '#407D9D',
      paddingRight: 17,
      fontSize: 18
  },
  result:{
    fontSize: 15,
    color: '#515C6F',
  },
    button: {
      color: '#407D9D',
      paddingBottom: 5,
      paddingTop: 15,
      paddingLeft: 10,
      paddingRight: 15,
      fontSize: 17
   },
    searchbar: {
      marginTop:-100,
      height: 40,
      width: 350,
      backgroundColor: 'white',
      borderRadius: 15,
      marginLeft: 10,
      marginRight: 10
        },
    stretch: {
      marginTop:2,
       width: 41,
       height: 41
    },
    heading:{
       fontFamily: 'Avenir-Book',
       color: '#515C6F',
       marginTop:30,
       fontSize: 39,
       textAlign: 'left',
       fontWeight: 'bold',
       paddingLeft: 15
       }
   });
