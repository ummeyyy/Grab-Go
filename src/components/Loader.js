import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {
  View,
  Image,
  Modal,
  StyleSheet,
  Text
} from 'react-native';
import {Bubbles} from 'react-native-loader';
export default class Loader extends Component {
  render() {
    const { animationType, modalVisible } = this.props;
    return (
      <Modal
        animationType={animationType}
        transparent
        visible={modalVisible}
        onRequestClose={()=>{this.props.modalVisible=false}}
      >
        <View style={styles.wrapper}>
          <View style={styles.loaderContainer}>
          
            <View
              style={styles.loaderImage}>
             
               
               <Bubbles size={9} color="#494871" />
               
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

Loader.propTypes = {
  animationType: PropTypes.string.isRequired,
  modalVisible: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
  loaderContainer: {
    width: 130,
    height: 90,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    position: 'absolute',
    left: '43%',
    top: '50%',
    marginLeft: -45,
    marginTop: -45,
  },
  loaderImage: {
    width: 70,
    height: 70,
    position: 'relative',
    left: '64%',
    marginLeft: -50,
    top: '50%',
    marginTop: -15,
    
  },
});