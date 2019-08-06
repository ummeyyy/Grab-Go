import React from "react";
import { Button, ThemeProvider } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import { StyleSheet, View, Text, FlatList } from "react-native";

const theme = {
  colors: {
    primary: "#000",
  },
};

const reviewsData = [
  {
    name: "Paul Gascoigne",
    review:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    rating: 3,
  },
  {
    name: "Paulo Gascoigne",
    review:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    rating: 5,
  },
];

export default class ProductInformationScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: "#fff",
      borderBottomColor: "#000",
      borderBottomWidth: 1,
      marginHorizontal: 24,
      elevation: 0,
    },
    title: "Information",
    headerTitleStyle: {
      fontFamily: "work-sans-semibold",
      fontSize: 18,
      textAlign: "center",
      flex: 1,
      color: '#042E44',
    },
    headerLeft: (
      <Button
        containerStyle={{
          marginLeft: 0,
        }}
        buttonStyle={{
          paddingVertical: 10,
          paddingRight: 20,
        }}
        type="clear"
        onPress={() => {
          navigation.goBack();
        }}
        icon={<Ionicons name="ios-arrow-back" size={20} color="#000" />}
      />
    ),
  });

  render() {
    return (
      <ThemeProvider theme={theme}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.container}>
            <Text style={styles.heading}>Sweatshirt with Gucci basquiat print</Text>
            <Text style={styles.paragraph}>
            The Fall Winter 2019 fashion show inspires a line-up of T-shirts and sweatshirts, 
            featuring mask prints in different colors and shapes, reproducing the same designs that walked the runway 
            in a series of ornate looks. A cut between the visible and the invisible, the mask represents showing and 
            hiding who we are, a means to protect the kindness and beauty within.
            </Text>
            <Text style={styles.heading}>More About Product</Text>
            <FlatList
              style={styles.paragraph}
              data={[
                { key: "Team with jeans and you're good to go" },
                { key: "Grandad collar" },
                { key: "Dropped shoulders" },
                { key: "Button placket" },
                { key: "Chest pocket" },
                { key: "Oversized fit" },
                { key: "Designed to look baggy" },
              ]}
              renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                  <View style={styles.dot} />
                  <Text style={styles.listItem}>{item.key}</Text>
                </View>
              )}
            />
            <Text style={styles.heading}>For Both Genders</Text>
            <Text style={styles.paragraph}>
            The male model is 6'1", the female model is 5'9" and they are both wearing a size large.These themes come together on this 
            online exclusive item’s special edition packaging accentuated by the fashion show’s signature prints, and 
            completed by a magnetic closure.
            </Text>
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
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
  },
  contentContainer: {},
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#000",
  },
  heading: {
    fontFamily: "work-sans-bold",
    fontSize: 21,
    marginTop: 30,
    color: '#042E44',
  },
  paragraph: {
    fontFamily: "work-sans",
    fontSize: 14,
    marginTop: 30,
    lineHeight: 23,
    color: '#042E44',
  },
  listItem: {
    fontFamily: "work-sans",
    fontSize: 14,
    lineHeight: 23,
    color: '#042E44',
  },
  dot: {
    width: 5,
    height: 5,
    backgroundColor: "#000",
    marginRight: 12,
    color: '#042E44',
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
