import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { LinearGradient } from 'expo';
import { createStackNavigator, createAppContainer} from 'react-navigation';


export default class BlackFade extends React.Component {
  static navigationOptions = {
    header:null
  }
    render() {
      return (
        
         <View style={{ backgroundColor: '#5093255', flex: 1}}>
           <LinearGradient colors={['#093255', '#517fa4']} 
           style={{ flex:1,padding: 15, alignItems: 'center', borderRadius: 6 }}>
             <View style = {{height:200,marginTop:50}}> 
               <Text style={styles.heading}>SCANNER</Text>
             </View> 
             <View style = {{height:200}}> 
                <Image style={styles.stretch}
                source={require('D:/reactnative/grab-n-go-master/src/Image/BS.png')} />
             </View> 
             <View style = {{backgroundColor: 'white', width:200, height:50, paddingBottom: 8,paddingTop: 5, 
             borderColor: '#164794', borderRadius:1, borderWidth:2 , shadowRadius:4, shadowOpacity:0.34
                       }}>
               <Button onPress={()=> this.props.navigation.navigate('scan')}
               style={styles.button} type="outline"
                       title="START SCANNING"/> 
             </View> 
             <View>
               <Text style = {{marginTop:7, fontFamily: 'Arial', color: '#E1E5ED', 
               textShadowColor:'#E1E5ED', textShadowOffset: { width: 0.4, height: 0.4 }, 
               textShadowRadius: 1}}> GRAB, SCAN & GO </Text>
             </View>
             </LinearGradient> 
           </View>
      );
    }
  }


 const styles=StyleSheet.create({
    button: {
      fontFamily: 'Courier',
      color: '#164794',
      textAlign: 'center',
      fontWeight: 'bold',
      marginBottom:5
    },
    stretch: {
      marginTop:-115,
       width: 280,
       height: 300
    },
    heading:{
       fontFamily: 'Arial',
       color: 'white',
       marginTop:10,
       fontSize: 39,
       textAlign: 'center',
       fontWeight: 'bold',
       }
   });