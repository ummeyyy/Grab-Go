import React from "react";
import { FlatList, StyleSheet, Text, View, Linking } from "react-native";
import { Button, ThemeProvider, Input, CheckBox, Badge, Image } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";

const theme = {
  colors: {
    primary: "#000",
  },
};

export default class CheckoutScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fastShippingChecked: false,
      freeShippingChecked: true,
      applePayChecked: true,
      visaChecked: false,
      stripeChecked: false,
    };
  }

  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: "#fff",
      borderBottomColor: "#000",
      borderBottomWidth: 1,
      marginHorizontal: 24,
      elevation: 0,
    },
    title: "Checkout",
    headerTitleStyle: {
      // fontFamily: "work-sans-semibold",
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

  displayPayButton() {
    return (
      <Button
        buttonStyle={styles.saveButton}
        titleStyle={styles.titleButtonStyle}
        title="STRIPE METHOD"
        icon={
          <View style={styles.appleLogoButtonContainer}>
            <Ionicons name="logo-apple" size={20} color="#fff" />
          </View>
        }
        iconRight
        containerStyle={styles.saveButtonContainer}
        onPress={() => this.props.navigation.navigate("payment")}
      />
    );
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.container}>
            <View>
              {/* <View style={styles.inputContainerGlobal}>
                <Text style={styles.inputLabelStyle}>Deliver To</Text>
                <Button
                  onPress={() => this.props.navigation.navigate("Delivery")}
                  buttonStyle={styles.addressButton}
                  titleStyle={styles.addressButtonText}
                  title="48 Lexington St, Soho, London"
                  containerStyle={[styles.addressButtonContainer]}
                  icon={
                    <Ionicons
                      style={styles.inputIcon}
                      name="ios-arrow-forward"
                      size={14}
                      color="#000"
                    />
                  }
                  iconRight
                  type="outline"
                />
              </View> */}
            </View>
            <View style={styles.contactDetailsContainer}>
              <View style={styles.bottomView}>
                <Badge
                  value="-10%"
                  status="success"
                  textStyle={{
                    // fontFamily: "work-sans",
                    fontSize: 12,
                    color: "#fff",
                  }}
                  badgeStyle={{
                    backgroundColor: "#F05829",
                    paddingHorizontal: 6,
                    borderWidth: 0,
                  }}
                />
              </View>
              <Input
                containerStyle={styles.inputContainerGlobal}
                placeholder="ER44JH"
                label="Promocode"
                labelStyle={styles.inputLabelStyle}
                inputContainerStyle={styles.inputContainerStyle}
                inputStyle={styles.inputInsideStyle}
                placeholderTextColor="#000"
                autoCapitalize="characters"
              />
            </View>
            <View>
              <View style={styles.spaceBetweenContainer}>
                <Text style={styles.contactText}>My Cart</Text>
                <Button
                  title="Show all"
                  type="clear"
                  containerStyle={styles.showAllButtonContainer}
                  buttonStyle={styles.showAllButtonStyle}
                  titleStyle={styles.showAllButtonTitle}
                />
              </View>
              <View style={styles.line}></View>
            </View>
          </View>
          <FlatList
            style={styles.checkoutSliderContainer}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={[
              {
                key:
                "https://qne.com.pk/product_images/orgsize_156077up-images-3.jpg"              },
              {
                key:
                "https://ayaan.com.pk/assets/uploads/faizan3/8961100287826.jpg"              },
              
            ]}
            renderItem={(
              { item } // Standard Image
            ) => <Image source={{ uri: item.key }} style={styles.checkoutSliderImage} />}
          />
          <View style={styles.container}>
            {/* <View style={styles.contactDetailsContainer}>
              <Text style={styles.contactText}>Delivery options</Text>
              <View style={styles.line}></View>
            </View>
            <View style={styles.contactDetailsContainer}>
              <View style={styles.spaceBetweenContainer}>
                <CheckBox
                  activeOpacity={1}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={{
                    fontSize: 14,
                    marginLeft: 24,
                    color: "#000",
                  }}
                  fontFamily="work-sans"
                  title="Fast shipping"
                  checked={this.state.fastShippingChecked === false}
                  onPress={() => this.setState({ fastShippingChecked: false })}
                  checkedIcon={
                    <View style={styles.checkBoxIconContainer}>
                      <Ionicons name="ios-checkmark" size={20} color="#fff" />
                    </View>
                  }
                  uncheckedIcon={<View style={styles.emptyBox}></View>}
                />
                <Text style={styles.checkBoxPriceText}>+$ 6,66</Text>
              </View>
              <Text style={styles.checkBoxDesc}>
                1 day fly time and 1 day delivery time to door. Be fast stylish faster like a
                bossman.
              </Text>
            </View> */}

            {/* <View style={styles.contactDetailsContainer}>
              <View style={styles.spaceBetweenContainer}>
                <CheckBox
                  activeOpacity={1}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={{
                    fontSize: 14,
                    marginLeft: 24,
                    color: "#000",
                  }}
                  fontFamily="work-sans"
                  title="Free shipping"
                  checked={this.state.fastShippingChecked === true}
                  onPress={() => this.setState({ fastShippingChecked: true })}
                  uncheckedIcon={<View style={styles.emptyBox}></View>}
                  checkedIcon={
                    <View style={styles.checkBoxIconContainer}>
                      <Ionicons name="ios-checkmark" size={20} color="#fff" />
                    </View>
                  }
                />
                <Text>+$ 0</Text>
              </View>
                </View>*/}
            <View style={styles.contactDetailsContainer}>
              <Text style={styles.contactText}>Payment</Text>
              <View style={styles.line}></View>
            </View>
            <View style={styles.contactDetailsContainer}>
              <CheckBox
                activeOpacity={1}
                containerStyle={styles.checkBoxContainer}
                textStyle={{
                  fontSize: 14,
                  marginLeft: 24,
                  color: "#042E44",
                }}
                // fontFamily="work-sans"
                title="ApplePay"
                checked={!!(this.state.visaChecked === false && this.state.stripeChecked === false)}
                onPress={() =>
                  this.setState({
                    applePayChecked: true,
                    stripeChecked: false,
                    visaChecked: false,
                  })
                }
                uncheckedIcon={
                  <View style={styles.checkBoxSelectIconContainer}>
                    <Ionicons name="ios-radio-button-off" size={20} color="#042E44" />
                  </View>
                }
                checkedIcon={
                  <View style={styles.checkBoxSelectIconContainer}>
                    <Ionicons name="ios-radio-button-on" size={20} color="#042E44" />
                  </View>
                }
              />
            </View>
          </View>
          <View style={styles.bottomPayContainer}>
            <View style={[styles.spaceBetweenContainer, styles.subTotalContainer]}>
              {/* <Text style={styles.showAllButtonTitle}>Sub-total</Text>
              <Text style={styles.subTotalCountText}>RS 6.66</Text> */}
            </View>
            <View style={[styles.spaceBetweenContainer, styles.totalContainer]}>
              <Text style={styles.totalDescText}>Total to pay</Text>
              <Text style={styles.totalCountText}>Rs 64</Text>
            </View>
            {this.displayPayButton()}
            <Text style={styles.privacyText}>
              By placing your order your agree to our{" "}
              <Text
                style={styles.privacyHyperlink}
                onPress={() => Linking.openURL("https://code.market")}
              >
                terms and conditions
              </Text>
              ,{" "}
              <Text
                style={styles.privacyHyperlink}
                onPress={() => Linking.openURL("https://code.market")}
              >
                privacy
              </Text>{" "}
              and{" "}
              <Text
                style={styles.privacyHyperlink}
                onPress={() => Linking.openURL("https://code.market")}
              >
                returns policies
              </Text>{" "}
              and consent to some of your data being stored by our shop which may be used to make
              future shopping experiences better for you
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
  infoWarningContainer: {
    marginTop: 32,
  },
  infoWarning: {
    marginBottom: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  infoWarningText: {
    marginLeft: 16,
    // fontFamily: "work-sans",
    fontSize: 12,
    color: "#042E44",

  },
  contactDetailsContainer: {
    marginBottom: 24,
  },
  contactText: {
    marginBottom: 16,
    // fontFamily: "work-sans",
    fontSize: 14,
    color: "#042E44",

  },
  addressBadge: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#000",
    marginRight: 16,
    marginBottom: 32,
    // fontFamily: "work-sans-bold",
    fontSize: 12,
    color: "#042E44",

  },
  checkBoxContainer: {
    borderWidth: 0,
    backgroundColor: "#fff",
    padding: 0,
    marginTop: 0,
    marginRight: 0,
    marginLeft: 0,
  },
  checkBoxIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 20,
    height: 20,
    backgroundColor: "#F05829",
  },
  checkBoxSelectIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 20,
    height: 20,
  },
  checkBoxDesc: {
    // fontFamily: "work-sans",
    fontSize: 10,
    color: "#787878",
    marginLeft: 46,
    width: 220,
    lineHeight: 16,
    color: "#042E44",

  },
  checkBoxPriceText: {
    // fontFamily: "work-sans-bold",
    fontSize: 14,
    color: "#042E44",

  },
  emptyBox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#F05829",
  },
  bottomView: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
    position: "absolute", // Here is the trick
    bottom: 0, // Here is the trick
  },
  inputIcon: {},
  inputContainerGlobal: {
    flexDirection: "row",
    paddingHorizontal: 0,
    alignItems: "center",
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    paddingVertical: 16,
  },
  inputLabelStyle: {
    flex: 24,
    // fontFamily: "work-sans",
    fontSize: 12,
    color: "#000",
    color: "#042E44",

  },
  inputContainerStyle: {
    flex: 76,
    borderBottomColor: "#000000",
    borderBottomWidth: 0,
    borderLeftColor: "#000000",
    borderLeftWidth: 1,
    height: 21,
    paddingLeft: 24,
    justifyContent: "center",
  },
  addressButtonContainer: {
    flex: 76,
    borderBottomColor: "#000000",
    borderBottomWidth: 0,
    borderLeftColor: "#000000",
    borderLeftWidth: 1,
    borderRadius: 0,
    paddingLeft: 24,
    justifyContent: "center",
  },
  inputInsideStyle: {
    // fontFamily: "work-sans-semibold",
    fontSize: 12,
    color: "#042E44",

  },
  spaceBetweenContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  showAllButtonContainer: {},
  showAllButtonStyle: {
    marginBottom: 16,
    padding: 0,
    alignItems: "flex-start",
    height: 14,
  },
  showAllButtonTitle: {
    // fontFamily: "work-sans",
    fontSize: 12,
    color: "#042E44",
  },
  checkoutSliderContainer: {
    paddingLeft: 24,
    marginVertical: 16,
  },
  checkoutSliderImage: {
    marginRight: 8,
    width: 75,
    height: 108,
  },
  labelCardNumberContainer: {
    flex: 145,
  },
  labelExpireContainer: {
    flex: 120,
  },
  labelCcvContainer: {
    flex: 65,
  },
  labelCardNumber: {
    // fontFamily: "work-sans",
    fontSize: 12,
    color: "#042E44",

  },
  inputPayRow: {
    marginTop: 16,
    marginBottom: 24,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputCardContainerGlobal: {
    paddingHorizontal: 0,
    paddingVertical: 16,
  },
  borderBottomNull: {
    borderBottomWidth: 0,
  },
  borderRight: {
    borderRightWidth: 1,
    borderRightColor: "#000",
  },
  cardInput: {
    // fontFamily: "work-sans-semibold",
    fontSize: 12,
    minHeight: 14,
    color: "#042E44",

  },
  textCenter: {
    textAlign: "center",
  },

  saveButtonContainer: {
    alignItems: "center",
  },
  titleButtonStyle: {
    // fontFamily: "work-sans-bold",
    fontSize: 18,
    flex: 2,

  },
  appleLogoButtonContainer: {
    borderLeftWidth: 1,
    borderLeftColor: "#fff",
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#042E44",
  },
  saveButton: {
    justifyContent: "space-around",
    borderRadius: 0,
    height: 55,
    marginBottom: 24,
    width: "100%",
    backgroundColor: "#042E44",
  },
  addressButton: {
    justifyContent: "space-around",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#000",
  },
  addressButtonText: {
    // fontFamily: "work-sans-bold",
    fontSize: 12,
    paddingTop: 0,
    paddingBottom: 0,
    color: "#042E44",
  },
  bottomPayContainer: {
    padding: 24,
    backgroundColor: "#F8F8F8",
  },
  subTotalContainer: {
    marginBottom: 16,
  },
  subTotalCountText: {
    // fontFamily: "work-sans",
    fontSize: 14,
    color: "#042E44",
  },
  totalContainer: {
    marginBottom: 24,
  },
  totalDescText: {
    // fontFamily: "work-sans-bold",
    fontSize: 12,
    color: "#042E44",
  },
  totalCountText: {
    // fontFamily: "work-sans-bold",
    fontSize: 14,
    color: "#042E44",
  },
  privacyText: {
    // fontFamily: "work-sans",
    fontSize: 14,
    color: "#042E44",
    opacity: 0.7,
   marginBottom: 16,
  },
  privacyHyperlink: {
    textDecorationLine: "underline",
  },
});