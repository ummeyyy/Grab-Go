import React, {Component} from 'react';
import {StyleSheet,View, Text, StatusBar, Image,ScrollView} from 'react-native';
import { LinearGradient } from 'expo';

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>

<View style={{ backgroundColor: 'white', flex: 1}}>
          <LinearGradient colors={['white','white', '#99C0D4','#729DB3','#2D637F','#163D51']} 
           style={{ flex:1, borderRadius:0 }}>

{/* ===================== CATEGORIES ========================== */}
               <View style={styles.categories}>
                <Text style={styles.text}> Categories </Text>
                 </View>
                <View style={styles.top}>
                <ScrollView horizontal = {true} showsHorizontalScrollIndicator = {false} style = {{paddingStart:5,paddingEnd:5}} >
                <View style={styles.options}> 
                      <Image 
                        style={styles.images} 
                        source={require('../Image/scarf.jpg')}/>
                    </View> 

                    <View style={styles.options}>
                      <Image 
                        style={styles.images} 
                        source={require('../Image/sale.png')}/>
                    </View>
                    
                    <View style={styles.options}>
                      <Image 
                        style={styles.images} 
                        source={require('../Image/backapck.jpg')}/>
                    </View>
                    
                    <View style={styles.options}>
                      <Image 
                        style={styles.images} 
                        source={require('../Image/Appraisal.png')}/>
                    </View>
                    <View style={styles.options}>
                      <Image 
                        style={styles.images} 
                        source={require('../Image/sale.png')}/>
                    </View>
                    
                    <View style={styles.options}>
                      <Image 
                        style={styles.images} 
                        source={require('../Image/backapck.jpg')}/>
                    </View>
                    
                    <View style={styles.options}>
                      <Image 
                        style={styles.images} 
                        source={require('../Image/Appraisal.png')}/>
                    </View>

</ScrollView>
                     
          
                </View>
           
 {/* ===================== CATGORIES TEXT ========================== */}       
                <View style={styles.optionNames}> 
                <Text style={styles.optionNamesText}> Apparel </Text>
                <Text style={styles.optionNamesText}> Cosmetics </Text>
                <Text style={styles.optionNamesText}> Shoes </Text>
                <Text style={styles.optionNamesText}> Stationary </Text>                
                </View>

{/*========================= DISCOVER =======================*/}
            <View style={styles.center}>
              <Text style={styles.text}> Discover </Text>
            </View> 
            <View style={styles.discover}> 

            </View>
{/* ===================== BOTTOM ========================== */}

    <View style={styles.bottom}>

          <View style={styles.bottomItem}>
          
            <View style={styles.bottomItemInner}>
            
          </View>
          <View style={styles.bottomItemInner}>
          </View>
          </View>
         

          <View style={styles.bottomItem}>
            <View style={styles.bottomItemInner}>
          </View>
          <View style={styles.bottomItemInner}>
          </View>
          </View>
          

          <View style={styles.bottomItem}>
            <View style={styles.bottomItemInner}>
          </View>
          <View style={styles.bottomItemInner}>
          </View>
          </View>
          <View style={styles.bottomItem}>
            <View style={styles.bottomItemInner}>
          </View>
          <View style={styles.bottomItemInner}>
          </View>
          </View>
      </View>


      </LinearGradient>      
            </View>
            </View>
        );
    }
}

const styles=StyleSheet.create({
 container:{
    flex: 1
 },
 categories:{
   marginTop:15,
    height:40,
    //backgroundColor:'yellow',
   // alignItems:'center',
    justifyContent:'center'
 },
 text:{
    fontSize:25,
 },
  top:{
    //borderRadius:4,
    // marginLeft:2,
    // marginRight:2,
    flexDirection:'row',
    height:'12%',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#163d51',//'hsla(187, 100%, 40%,1)',
    
 },
 images:{
   
   marginLeft:15,
   marginRight:5,
   width:70,
   height:70,
   borderRadius:70/2,
   borderWidth:2,
   borderColor:'#eee',
   backgroundColor:'#163d51',//'hsla(187, 100%, 40%,1)',
     },
 optionNames:{
   flexDirection:'row',
    // textAlign:'center',
    //  fontWeight:'20',
     //color:'white',
     backgroundColor:'#163d51'
 },
 optionNamesText:{
   color:'white',
   paddingLeft:25

 },
 discover:{
   height:'30%',
   backgroundColor:'#163d51',
   marginTop:10,
   paddingTop: 10,
   marginRight:10,
   marginLeft:10,
   borderRadius:10,
   borderColor:'#163d51',
   borderWidth:4,

 },
 bottom:{
   height:'75%',
  // backgroundColor:'yellow',
   flexDirection: 'row',
   flexWrap: 'wrap',
   padding:5
 },
 bottomItem:{
  width:'50%',
  height:'50%',
 
 },
 bottomItemInner:{
   flex:1,
   backgroundColor:'#163d51',
   margin:3,
   borderRadius:6
 }

});