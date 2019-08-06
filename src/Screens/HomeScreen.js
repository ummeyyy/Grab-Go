import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  View,

} from "react-native";
import { Font } from 'expo';
import { Container } from 'native-base';
import {LinearGradient} from 'expo';
import { Button, ThemeProvider, Image } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";

const theme = {
  colors: {
    primary: "#000",
  },
};

const productsData = [
  {
    key: "1",
    title: "APPAREL",
    picture:
      "http://todaybigdeal.com/wp-content/uploads/2018/09/Clothing_Accessories-1024x493-678x381.png",
    totalitems: "256,000",
  },
  {
    key: "2",
    title: "GROCERY & FOOD",
    picture:
      "http://ironmumkarla.com.au/wp-content/uploads/2016/04/grocery-shopping.jpg",
      totalitems: "218,600",
  },
  {
    key: "3",
    title: "PHARMACY",
    picture:
      "https://pharmacytimes.s3.amazonaws.com/v1_media/SafeImages/Webdam%20Assets/pharmacy1.jpg",
      totalitems: "150,000",
  },
  {
    key: "4",
    title: "HEALTH & BEAUTY",
    picture: "http://cosmeticsfit.com/wp-content/uploads/2017/02/Beautify-Clear-Acrylic-Cosmetic-Makeup-Holder-and-Organizer-with-Two-Sided-Mirror.jpg",
    totalitems: "346,000",
  },
  {
    key: "5",
    title: "BACK TO SCHOOL",
    picture: "https://blog.bestbuy.ca/wp-content/uploads/2017/07/7-apps-back-to-school-shopping-story.jpg",
    totalitems: "105,000",
  },
  {
    key: "6",
    title: "HOME & APPLIANCES",
    picture: "http://s21230.pcdn.co/wp-content/uploads/2017/04/List-of-the-Top-Household-Kitchen-Equipment-Suppliers-in-Sharjah-with-Contact-Details.jpg",
    totalitems: "140,600",
  },
];

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
    };
  
  }

  async componentDidMount() {
    await Font.loadAsync({
      'space-mono-regular': require('../../assets/fonts/SpaceMono-Regular.ttf'),
      'work-sans-bold': require('../../assets/fonts/WorkSans-Bold.ttf'),
      'work-sans-regular': require('../../assets/fonts/WorkSans-Regular.ttf'),
      'work-sans-semibold': require('../../assets/fonts/WorkSans-SemiBold.ttf'),
    });

    this.setState({ fontLoaded: true })
  }
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: "transparent",
      borderBottomWidth: 0,
      marginHorizontal: 24,
      elevation: 0,
    },
    headerTransparent: true,
    title: "",
    headerTitleStyle: {
      // fontFamily: "work-sans-semibold",
      fontSize: 18,
      textAlign: "center",
      flex: 1,
    },
    headerLeft: null,
  });

  render() {
    return (
      <Container style={{ backgroundColor: 'white', flex: 1}}>
      <LinearGradient colors={['white','white', '#99C0D4','#729DB3','#2D637F','#163D51']} 
       style={{ flex:1,padding: 12, borderRadius:0 }}>
      <ThemeProvider theme={theme}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}>
         
          <View style={styles.container}>
            <View style={styles.headerBannerContainer}>
              <Text style={styles.headerTextStyle}>Limited Time Offers!</Text>
              <View style={styles.discountBannerContainer}>
                <FlatList
                  data={[
                    { text: "5% for Women T-shirts" },
                    { text: "5% for Women" },
                    { text: "5% for Women T-shirts" },
                  ]}
                  numColumns={2}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item, index }) => (
                    <View style={styles.saleBannerTextContainer}>
                      <Text style={styles.saleBannerText}>{item.text}</Text>
                    </View>
                  )}
                />
              </View>
            </View>
            <FlatList
              style={styles.productsGridContainer}
              data={productsData}
              numColumns={2}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  style={styles.productGridItem}
                  onPress={() => this.props.navigation.navigate("Product")}
                >
                  <Image style={styles.imageProductGridItem} source={{ uri: item.picture }} />
                  <View style={[styles.titleProductGridItemContainer]}>
                    <Text style={[styles.titleProductGridItem]}>{item.title}</Text>
                  </View>
                  <View style={styles.priceRowRelated}>
                    <Text style={styles.actualPriceRelated}>{item.price}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>

        </KeyboardAwareScrollView>
      </ThemeProvider>
      </LinearGradient>
                </Container>
    );
  }
}

export const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  headerBackButton: {
    marginLeft: 24,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#000",
  },
  headerBannerContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 48,
  },
  headerTextStyle: {
    // fontFamily: "work-sans-bold",
    fontSize: 48,
    textAlign: "center",
    zIndex: 10,
    lineHeight: 48,
    textTransform: "uppercase",
  },
  discountBannerContainer: {
    paddingVertical: 28,
    zIndex: 1,
    height: 180,
    flex: 1,
    width: "100%",
    backgroundColor: "#042E44",
    justifyContent: "space-around",
    marginTop: -70,
    alignItems: "flex-end",
    flexDirection: "row",
  },
  saleBannerTextContainer: {
    paddingVertical: 8,
    marginLeft: 18,
    width: "50%",
    borderBottomWidth: 1,
  },
  saleBannerText: {
    // fontFamily: "work-sans-semibold",
    fontSize: 12,
    color: 'white'
  },
  rightSalesTextContainer: {},
  categoryBannerContainer: {
    marginVertical: 24,
  },
  backgroundContainer: {
    height: 395,
    justifyContent: "center",
    alignItems: "center",
  },
  textInsideCategory: {
    // fontFamily: "work-sans-bold",
    fontSize: 48,
    textTransform: "uppercase",
  },
  productsGridContainer: {
    marginTop: 24,
    marginHorizontal: -8,
    flexDirection: "column",
  },
  productGridItem: {
    flex: 0.5,
    marginHorizontal: 8,
    marginBottom: 24,
  },
  imageProductGridItem: {
    width: "100%",
    height: 230,
  },
  priceRowRelated: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  actualPriceRelated: {
    // fontFamily: "work-sans-bold",
    fontSize: 15,
    color: "#000",
    marginRight: 8,
  },
  oldPriceRelated: {
    // fontFamily: "work-sans-bold",
    fontSize: 9,
    color: "#646464",
    textDecorationLine: "line-through",
  },
  titleProductGridItemContainer: {
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  titleProductGridItem: {
    maxWidth: 150,
    // fontFamily: "work-sans",
    fontSize: 14,
    textAlign: "center",
    backgroundColor:"#042E44",
    color:'white'
  },
  titleButtonStyle: {
    // fontFamily: "work-sans-bold",
    fontSize: 9,
    flex: 2,
    paddingBottom: 0,
    paddingTop: 0,
  },
  appleLogoButtonContainer: {
    borderLeftWidth: 1,
    borderLeftColor: "#fff",
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
  },
  priceInsideButtonText: {
    // fontFamily: "work-sans-bold",
    fontSize: 9,
    color: "#fff",
  },
  categoryDiscountBanner: {
    backgroundColor: "#F05829",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 0,
    paddingHorizontal: 32,
    paddingVertical: 40,
  },
  titleCategoryDiscountBanner: {
    textAlign: "left",
    // fontFamily: "work-sans-bold",
    fontSize: 18,
    color: "#000",
  },
  brandsContainer: {
    backgroundColor: "#f8f8f8",
    marginHorizontal: -24,
    paddingHorizontal: 24,
  },
  brandsHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    alignItems: "center",
    paddingVertical: 16,
  },
  brandsHeaderText: {
    // fontFamily: "work-sans",
    fontSize: 14,
    color: "#000",
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 16,
  },
  brandsHeaderButton: {
    backgroundColor: "transparent",
    padding: 0,
  },
  tagsContainer: {
    paddingVertical: 26,
  },
  tagStyle: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 13,
    borderWidth: 1,
    marginRight: 10,
    marginBottom: 10,
    // fontFamily: "work-sans-semibold",
    fontSize: 12,
  },
  newArrivalsContainer: {
    marginTop: 32,
  },
  imageProductGridItemFirst: {
    width: "100%",
    height: 390,
  },
  actualPriceRelatedFirst: {
    // fontFamily: "work-sans-bold",
    fontSize: 21,
    color: "#000",
  },
  titleProductGridItemFirst: {
    maxWidth: 130,
    // fontFamily: "work-sans",
    fontSize: 18,
    textAlign: "center",
  },
});
