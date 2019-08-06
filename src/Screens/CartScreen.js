import React from "react";
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Button, ThemeProvider, Image } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import Swipeout from "react-native-swipeout";

const theme = {
  colors: {
    primary: "#000",
  },
};

export default class CartScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          key:
            "https://wondermedia.ru/wp-content/uploads/2017/12/New-Wave-Catty-Back-Black-800x1200.jpg",
          id: 0,
        },
        {
          key:
            "https://wondermedia.ru/wp-content/uploads/2017/12/New-Wave-Medical-Front-Yellow-800x1200.jpg",
          id: 1,
        },
        {
          key: "https://wondermedia.ru/wp-content/uploads/2017/12/FLY-BLACK-BACK-800x1200.jpg",
          id: 2,
        },
      ],
    };
  }

  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: "#fff",
      borderBottomColor: "#000",
      borderBottomWidth: 1,
      elevation: 0,
      marginHorizontal: 24,
    },
    title: "Cart",
    headerTitleStyle: {
      fontFamily: "work-sans-semibold",
      fontSize: 18,
      textAlign: "center",
      flex: 1,
      color: '#042E44',
    },
  });

  deleteItem = id => {
    this.setState({
      data: this.state.data.filter(item => item.id !== id),
    });
  };

  deleteItemById = key => {
    const filteredData = this.state.data.filter(item => item.key !== key);
    this.setState({ data: filteredData });
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.container}>
            <FlatList
              style={styles.productListContainer}
              showsHorizontalScrollIndicator={false}
              data={this.state.data}
              keyExtractor={(item, index) => item.key}
              renderItem={({ item }) => (
                <View style={styles.swipeContainer}>
                  <Swipeout
                    right={[
                      {
                        component: (
                          <TouchableOpacity
                            onPress={() => this.deleteItemById(item.key)}
                            style={styles.deleteIconContainer}
                          >
                            <Ionicons name="md-trash" size={30} color="#F05829" />
                          </TouchableOpacity>
                        ),
                        backgroundColor: "#fff",
                      },
                    ]}
                    autoClose
                    backgroundColor="transparent"
                    buttonWidth={96}
                  >
                    <View style={styles.productContainer}>
                      <TouchableOpacity>
                        <Image source={{ uri: item.key }} style={styles.productImage} />
                      </TouchableOpacity>
                      <View style={styles.productContent}>
                        <Text style={styles.productTitle}>
                          Sweatshirt with Gucci basquiat print
                        </Text>
                        <View style={styles.priceRow}>
                          <Text style={styles.actualPrice}>$ 32</Text>
                          <Text style={styles.oldPrice}>$ 64</Text>
                        </View>
                      </View>
                      <View style={styles.productCountButtons}>
                        <Button
                          buttonStyle={styles.plusButton}
                          titleStyle={styles.titleButtonStyle}
                          icon={<Ionicons name="ios-add" size={18} color="#042E44" />}
                        />
                        <View style={styles.countValueContainer}>
                          <Text style={styles.countValueText}>1</Text>
                        </View>
                        <Button
                          buttonStyle={styles.minusButton}
                          titleStyle={styles.titleButtonStyle}
                          icon={<Ionicons name="ios-remove" size={18} color="#042E44" />}
                        />
                      </View>
                    </View>
                  </Swipeout>
                </View>
              )}
            />
            <Button
              buttonStyle={styles.saveButton}
              titleStyle={styles.titleButtonStyle}
              title="CHECKOUT"
              icon={
                <View style={styles.buttonIconContainer}>
                  <Text style={styles.totalButtonText}>Total</Text>
                  <Text style={styles.totalButtonValue}>$96</Text>
                </View>
              }
              iconRight
              containerStyle={styles.saveButtonContainer}
              onPress={() => this.props.navigation.navigate("checkout")}
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
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 14,
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#000",
  },
  checkoutSliderContainer: {
    paddingLeft: 24,
    marginVertical: 16,
  },
  productImage: {
    marginRight: 8,
    width: 108,
    height: 108,
  },
  deleteIconContainer: {
    flex: 1,
    borderLeftColor: "#042E44",
    borderLeftWidth: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "column",
    marginLeft: 48,
  },
  swipeContainer: {
    marginVertical: 38,
  },
  productContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productContent: {
    alignItems: "flex-start",
    justifyContent: "space-around",
    flexDirection: "column",
    width: 145,
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productTitle: {
    fontFamily: "work-sans",
    fontSize: 16,
    marginBottom: 8,
    color:'#042E44',
  },
  actualPrice: {
    fontFamily: "work-sans-bold",
    fontSize: 16,
    color: "#F05829",
    marginRight: 8,  
  },
  oldPrice: {
    fontFamily: "work-sans-bold",
    fontSize: 10,
    textDecorationLine: "line-through",
    color:'#042E44',
  },
  productCountButtons: {
    paddingHorizontal: 8,
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: 0,
    borderWidth: 1,
    borderColor: "#042E44",
  },
  plusButton: {
    borderRadius: 0,
    backgroundColor: "transparent",
    color:'#042E44',
  },
  minusButton: {
    borderRadius: 0,
    backgroundColor: "transparent",
    color:'#042E44',
  },
  countValueContainer: {
    borderTopWidth: 1,
    borderTopColor: "#042E44",
    borderBottomColor: "#042E44",
    borderBottomWidth: 1,
  },
  countValueText: {
    marginVertical: 8,
    textAlign: "center",
  },
  titleButtonStyle: {
    fontFamily: "work-sans-bold",
    fontSize: 18,
    paddingHorizontal: 48,
    backgroundColor: '#042E44',
  },
  buttonIconContainer: {
    borderLeftWidth: 1,
    borderLeftColor: "#fff",
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: '#042E44',
  },
  saveButton: {
    justifyContent: "space-around",
    borderRadius: 0,
    height: 55,
    marginBottom: 24,
    backgroundColor: '#042E44',
  },
  totalButtonText: {
    color: "#fff",
    fontFamily: "work-sans",
    fontSize: 12,
    marginRight: 8,
  },
  totalButtonValue: {
    color: "#fff",
    fontFamily: "work-sans-bold",
    fontSize: 18,
  },
});
