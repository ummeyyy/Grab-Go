import React from "react";
import { Button, ThemeProvider, Image } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import { StyleSheet, View, StatusBar, Text } from "react-native";

const theme = {
  colors: {
    primary: "#000",
  },
};

export default class SavedSuccessfulScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static navigationOptions = {
    header: null,
    tabBarVisible: false,
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="light-content" />
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.container}>
            <Image
              style={styles.imageThanx}
              source={{
                uri: "https://wondermedia.ru/wp-content/uploads/2017/12/success.png",
              }}
            />
            <View style={styles.thanxHeaderContainer}>
              <Text style={styles.thanxHeader}>saved</Text>
            </View>
            <View style={styles.thanxTextContainer}>
              <Text style={styles.thanxText}>Changes saved and take effect immediately.</Text>
            </View>
            <Button
              buttonStyle={styles.saveButton}
              titleStyle={styles.titleButtonStyle}
              title="GO BACK"
              containerStyle={styles.saveButtonContainer}
              onPress={() => this.props.navigation.navigate("Profile")}
            />
          </View>
        </KeyboardAwareScrollView>
      </ThemeProvider>
    );
  }
}
const styles = StyleSheet.create({
  headerBackButton: {
    marginLeft: 24,
  },
  container: {
    backgroundColor: "#F05829",
    paddingHorizontal: 24,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  contentContainer: {
    backgroundColor: "#F05829",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 24,
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#000",
  },
  imageThanx: {
    height: 188,
    width: 201,
  },
  thanxHeader: {
    fontFamily: "work-sans",
    fontSize: 38,
    textTransform: "uppercase",
    color: "#000",
    textAlign: "center",
  },
  thanxText: {
    fontFamily: "work-sans",
    fontSize: 16,
    color: "#000",
    textAlign: "center",
  },
  thanxHeaderContainer: {
    marginVertical: 48,
  },
  thanxTextContainer: {
    marginBottom: 48,
  },
  titleButtonStyle: {
    fontFamily: "work-sans",
    fontSize: 18,
    textTransform: "uppercase",
  },
  saveButton: {
    borderWidth: 0,
    borderRadius: 0,
    height: 55,
    width: "100%",
    marginHorizontal: 0,
    justifyContent: "space-around",
  },
  saveButtonContainer: {
    height: 55,
    paddingHorizontal: 24,
  },
});
