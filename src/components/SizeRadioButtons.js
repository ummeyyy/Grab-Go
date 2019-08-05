import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default class SizeRadioButtons extends Component {
  state = {
    value: null,
  };

  render() {
    const { size } = this.props;
    const { value } = this.state;

    return (
      <View style={styles.buttonContainer}>
        {size.map(item => {
          return (
            <View key={item.key}>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => {
                  this.setState({
                    value: item.key,
                  });
                }}
              >
                <View
                  style={[styles.uncheckedCircle, value === item.key && styles.checkedCircle]}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.text}>{item.text}</Text>
                </View>
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
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },

  buttonStyle: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  checkedCircle: {
    width: 5,
    height: 5,
    borderRadius: 7,
    backgroundColor: "#000",
  },
  uncheckedCircle: {
    width: 5,
    height: 5,
    borderRadius: 7,
    backgroundColor: "#fff",
    left: -24,
    position: "absolute",
  },
  textContainer: {
    paddingVertical: 8,
    borderBottomColor: "#000",
    borderBottomWidth: 1,
  },
  text: {
    color: "#000",
    fontFamily: "work-sans",
    fontSize: 14,
  },
});
