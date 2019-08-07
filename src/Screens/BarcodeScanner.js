import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';

export default class BarcodeScannerExample extends React.Component {
  static navigationOptions = {
    header:null
  }

  state = {
    hasCameraPermission:null,
    data:null,
   errorMessage: null,
   isLoading:false
    }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
    }

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={{ flex: 1 }}>
        <BarCodeScanner
          onBarCodeScanned={this._handleBarCodeRead}
          style={StyleSheet.absoluteFill}
        />
         { this.state.isLoading && <Loader
                            modalVisible={this.state.isLoading}
                            animationType="slide"
                        /> }
      </View>
    );
  }

  _handleBarCodeRead = ( { type, data }) => {
    const { navigation } = this.props;
    if(this.state.data==null){
      this.setState({data:data});
    //   Alert.alert(`Bar code type : ${type} and data : ${data}`); 
      
      Vibration.vibrate(100);
    console.log(this.state)
        let datatopost2={
            attendance_id : Number(data),
            student_id:navigation.getParam('student_id', 'NO-ID'),
            lat:this.state.location.coords.latitude,
            log:this.state.location.coords.longitude

        }
        console.log(datatopost2)
        
      this.setState({ isLoading: true });
        
       
          
      

    }
    



  }
}