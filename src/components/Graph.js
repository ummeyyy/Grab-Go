import React, { Component } from 'react';
import { StyleSheet, View,  Dimensions } from 'react-native';
import {BarChart, LineChart} from 'react-native-chart-kit';
const { width, height } = Dimensions.get('window');


const chartConfig = {
  backgroundGradientFrom: 'white',
  backgroundGradientTo: 'white',
  color: (opacity = 1) => `rgba(0, 80, 160, ${opacity})`,
  strokeWidth: 2 // optional, default 3
  
}

// const data = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June'],
//   datasets: [{
//     data: [ 20, 45, 28, 80, 99, 43 ]
//   }]
// }

export default class Graph extends Component {
  render(){
    return(
      <View style={styles.container}>
        <View>
        {/* <LineChart
          data={this.props.data}
          width={width*0.9}
          height={height/3}
          yAxisLabel={'%'}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
          chartConfig={chartConfig}
        />  */}
        <BarChart
          data={this.props.data}
          width={width*0.9}
          height={height/2.5}
          yAxisLabel={'%'}
          chartConfig={chartConfig}
          />
         </View> 
     
     </View>
    )
  }
}

const styles = StyleSheet.create({
container:{
  width: width,
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
},
card:{
  marginTop: 40
}
})