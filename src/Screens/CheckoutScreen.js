import React, { Component } from 'react';
import {View,StyleSheet,Text,Button, Image} from "react-native";
import { Container, Content, Footer,FooterTab, Item, Input, Icon, Left,Body,Right } from 'native-base';
import { LinearGradient } from 'expo';

export default class App extends React.Component {
    render() {
      return (
        
       <View style={{ backgroundColor: 'white', flex: 1}}>
          <LinearGradient colors={['white','white', '#99C0D4','#729DB3','#2D637F','#163D51']} 
           style={{ flex:1,padding: 12, borderRadius:0 }}>

             {/* ============Heading============== */}
             <View style={styles.check}>
              <Text style = {styles.heading}>Checkout</Text>
             </View>

             {/* ============Payment Method============== */}

             <View style={{ paddingLeft:12, marginTop:50}}>
             <Text style = {styles.caption}>PAYMENT METHOD</Text>
                <View style={{ flex:1,paddingTop:25, marginTop:50}}>
                    <Image style={styles.stretch}
                    source={require('../Image/mastercard.png')} />
                    <View style={{ flex:2,marginTop:-23, paddingLeft:15}}>
                    <Text style = {styles.text1}>Master Card ending **00</Text>
                    </View>
                </View>              
               </View>

              {/* ============Items============== */}
             
             
             <View style={{ paddingTop:20,paddingLeft:12}}>

                <Text style = {styles.caption}>ITEMS</Text>
             </View>

              <View style={{ paddingTop:15,marginTop:15,flexDirection:"row"}}>
                    
                    <Image style={styles.stretch2} source={require('../Image/scarf.png')} />
                    
                    <View style={{ marginTop:15,paddingLeft:40}}>
                    <Text style = {styles.text1}>Red Cotton Scarf</Text>
                    <Text style = {styles.text1}>Rs:115</Text>
                    </View> 

               </View>

              <View style={{ flex:1,flexDirection:"row",marginTop:15,paddingTop:15}}>
                  <Image style={styles.stretch2} source={require('../Image/backpack.png')}/>
                                   <View style={{ marginTop:15,paddingLeft:40}}>
                    <Text style = {styles.text1}>Hiking Backpack</Text>
                    <Text style = {styles.text1}>Rs:1550</Text>
                  </View> 

               </View>


             {/*============footer=============*/}

             <View style = {{marginTop:5,backgroundColor:"transparent"}}>   
                <Footer transparent style = {{marginTop:5,borderRadius:10,backgroundColor:"clear"}}>
                    <Left>
                        <Text style = {{marginLeft:5, color:'white', fontSize:18 }}>Rs: 1665.00 </Text>
                    </Left>
                   <Right style = {{flexDirection:"row", marginLeft:35}} >
                      <Button  title = "CHECKOUT" color="white" fontWeight='bold' style={{paddingLeft:35}}
                      onPress = {()=>this.props.navigation.navigate('buy')}></Button>
                         <Icon style = {{color:"white"}} name='ios-arrow-dropright' />                  
                    </Right>
                </Footer>         
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
          marginTop:10,
          },
    stretch: {
       marginLeft:18,
       marginTop:-50,
       width: 45,
       height: 25
    },
    stretch2: {
      marginLeft:18,
      borderRadius: 50,
      width: 72,
      height: 72,
      borderRadius:75/2,
      borderWidth:2,
      borderColor:'#407D9D',
      backgroundColor:'#163d51',
   },
    caption: {
      color: '#407D9D',
      fontSize: 15
   },
    heading: {
       color: '#042E44',
       fontFamily: 'AlNile-Bold',
       marginTop:5,
       fontSize: 38,
       textAlign: 'center'
       },
    text1: {
        color: '#042E44',
        fontFamily: 'AlNile',
        fontSize: 17,
        textAlign: 'center',
        paddingLeft:-15,
        marginLeft:-15
        }
 });