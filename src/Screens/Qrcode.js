import React from 'react';

import { Vibration,StyleSheet, Text, View ,Alert,Platform} from 'react-native';

import { BarCodeScanner, Permissions,Constants,Location } from 'expo';
import Loader from '../components/Loader';
import {catRef,apparelsRef,back_to_schoolRef,health_beautyRef,food_groceryRef,home_appliancesRef,pharmacyRef} from '../Firebase/db';



export default class QRcode extends React.Component {
    static navigationOptions = {
        title: 'Scan QR Code',
      };
  state = {

     hasCameraPermission:null,
     data:null,
    errorMessage: null,
    isLoading:false

  }
  componentWillMount = async()=> {
    const { status } =await Permissions.askAsync(Permissions.CAMERA);

    this.setState({hasCameraPermission:status==='granted'});
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    // let providerStatus = await Location.getProviderStatusAsync();
    // if (!providerStatus.locationServicesEnabled) {
    //   this.setState({
    //       errorMessage: 'Location Services Disabled'
    //   })
    //   return;
    // }

    // let { status } = await Permissions.askAsync(Permissions.LOCATION);
    // if (status !== 'granted') {
    //   this.setState({
    //     errorMessage: 'Permission to access location was denied',
    //   });
    //   return
    // }

    // let location = await Location.getCurrentPositionAsync({});
    // this.setState({ location });
    // console.log(this.state.location)
  };
 

  render() {

    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {

    return <Text>Requesting for camera permission</Text>;

    } else if (hasCameraPermission === false) {

    return <Text>No access to camera</Text>;

    } else {

        return (

            <View style={styles.container}>

              <BarCodeScanner

                  onBarCodeRead={this._handleBarCodeRead}

                  style={{ height: 250, width: 350 }}

              />
            { this.state.isLoading && <Loader
                            modalVisible={this.state.isLoading}
                            animationType="slide"
                        /> }
            </View>

            );

    }

  }

//8961100287818
  _handleBarCodeRead = ( { type, data }) => {
    const { navigation } = this.props;
    // this.setState({ isLoading: true });
    console.log('the barcode is ')
    console.log(data)
    if(this.state.data==null){
      this.setState({data:data});
      
      Vibration.vibrate(100);
    



    try{
        catRef.on("value", dataSnapshot => {
            // this.setState({isLoading:false})
          dataSnapshot.forEach(singleCategory => {
        //  console.log(singleCategory.key)
        //  console.log(singleCategory.val())
        //  keys.push(singleCategory.val())
            singleCategory.forEach(item => {
            // console.log(item.val())
            // console.log("addtocardproducts")

              if (item.val().barcode == Number(data)) {
                // this.setState({ isLoading: false });

                // alert("match successful")

                let productToGoToCheckout={
                    key : Number(data),
                    price:item.val().price,
                    url:item.val().url,
                    product_name:item.val().product_name
        
                }
                console.log(productToGoToCheckout.product_name)

                  this.props.navigation.navigate('cart',{product:productToGoToCheckout})
              }
            //   else{
            //     this.setState({ isLoading: false });
            //   alert("try with another qrcode as no match found with our products")
            //   }
              

  
            //   allBarcodes.push(item.val().barcode)
  
            // console.log(allBarcodes)
    
            })
    
          })
          
  
        })
    }
    catch (error) {
    //  this.setState({ isLoading: false });
    alert(error);
  }




        
       
          
      

    }
    



  }

}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#fff',

    alignItems: 'center',

    justifyContent: 'center',

  },

});