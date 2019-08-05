import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default class ColorRadioButtons extends Component {
  state = {
    value: null,
  };

  render() {
    const { options } = this.props;
    const { value } = this.state;

    return (
      <View style={styles.buttonContainer}>
        {options.map(item => {
          return (
            <View key={item.key} style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.circle, { backgroundColor: item.color }]}
                onPress={() => {
                  this.setState({
                    value: item.key,
                  });
                }}
              >
                {value === item.key && (
                  <View style={[styles.checkedCircle, { backgroundColor: "#fff" }]} />
                )}
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flex: 57,
  },

  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
  },

  checkedCircle: {
    width: 5,
    height: 5,
    borderRadius: 7,
  },
});
