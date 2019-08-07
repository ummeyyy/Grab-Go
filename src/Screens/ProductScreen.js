import React from "react";
import { Button, Image, Overlay, ThemeProvider } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import SwiperFlatList from "react-native-swiper-flatlist";
import ColorRadioButtons from "../components/ColorRadioButtons";
import SizeRadioButtons from "../components/SizeRadioButtons";
import Loader from '../components/Loader';

const theme = {
  colors: {
    primary: "#000",
  },
};

const options = [
  {
    key: "pay",
    color: "#F4A603",
  },
  {
    key: "performance",
    color: "#B82D4A",
  },
  {
    key: "aToZ",
    color: "#595E67",
  },
  {
    key: "zToA",
    color: "#24433F",
  },
];

const size = [
  {
    key: "pay",
    text: "XS – 38 - 38 / 40",
  },
  {
    key: "performance",
    text: "XS – 38 - 38 / 40",
  },
  {
    key: "aToZ",
    text: "XS – 38 - 38 / 40",
  },
  {
    key: "zToA",
    text: "XS – 38 - 38 / 40",
  },
];

const relatedItems = [
  {
    title: "Sweatshirt with Gucci basquiat print",
    picture:
      "https://wondermedia.ru/wp-content/uploads/2017/12/New-Wave-Medical-Front-Yellow-800x1200.jpg",
    price: "$ 32",
    oldprice: "$ 64",
  },
  {
    title: "Sweatshirt with Barber basquiat print",
    picture:
      "https://wondermedia.ru/wp-content/uploads/2017/12/New-Wave-Medical-Front-Yellow-800x1200.jpg",
    price: "$ 32",
    oldprice: "$ 64",
  },
  {
    title: "Sweatshirt with Lacoste basquiat print",
    picture:
      "https://wondermedia.ru/wp-content/uploads/2017/12/New-Wave-Medical-Front-Yellow-800x1200.jpg",
    price: "$ 32",
    oldprice: "$ 64",
  },
  {
    title: "Sweatshirt with Versace print",
    picture:
      "https://wondermedia.ru/wp-content/uploads/2017/12/New-Wave-Medical-Front-Yellow-800x1200.jpg",
    price: "$ 32",
    oldprice: "$ 64",
  },
  {
    title: "Sweatshirt with Versace print",
    picture:
      "https://wondermedia.ru/wp-content/uploads/2017/12/New-Wave-Medical-Front-Yellow-800x1200.jpg",
    price: "$ 32",
    oldprice: "$ 64",
  }
  

];

export default class ProductScreen extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      isVisible: false,
      isLoading:false


    };
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
    headerLeft: (
      <Button
        containerStyle={{
          marginLeft: 0,
        }}
        buttonStyle={{
          padding: 0,
          backgroundColor: "#fff",
          borderRadius: 40,
          width: 40,
          height: 40,
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
    const {params} = this.props.navigation.state;
    this.props.navigation.state = null
    
    console.log("productscreen")
    console.log(params.category) // outputs "Some Value"
    

    return (
      <ThemeProvider theme={theme}>
        <StatusBar backgroundColor="transparent" translucent />
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
        >
          <View>
            <SwiperFlatList
              index={2}
              showPagination
              paginationDefaultColor="#D8D8D8"
              paginationActiveColor="#F05829"
              paginationStyle={styles.paginationStyle}
              paginationStyleItem={styles.paginationStyleItem}
              data = {params.category}
              // data={[
              //   {
              //     key:
              //       params.category[0].url
              //   },
              //   {
              //     key:
              //     params.category[1].url
              //   },
              //   {
              //     key:
              //     params.category[2].url
              //   },
              //   {
              //     key:
              //     params.category[3].url
              //   },
              //   {
              //     key:
              //     params.category[4].url
              //   },
                


              // ]}

              renderItem={({ item }) => (
                <View style={styles.swiperPicContainer}>
                  <Image source={{ uri: item.url }} style={styles.productSwiperPic} />
                </View>
              )}
            />
          </View>

          <View style={styles.container}>
            <View style={styles.priceRow}>
              <Text style={styles.actualPrice}>Rs{params.category[2].price} </Text>
              <Text style={styles.oldPrice}>Rs {params.category[2].price*0.05+params.category[2].price}</Text>
            </View>
            <View style={styles.productContent}>
              <Text style={styles.productTitle}>{params.category[2].product_name}</Text>
              <Text style={styles.productDesc}>
              Availability : {params.category[2].availability}
              </Text>
              { this.state.isLoading && <Loader
                            modalVisible={this.state.isLoading}
                            animationType="slide"
                        /> }
            </View>
            <View style={styles.attributeContainer}>
              <ColorRadioButtons options={options} />
              <TouchableOpacity
                style={styles.sizeButtonStyle}
                onPress={() => this.setState({ isVisible: true })}
              >
                <Text style={styles.titleButtonStyleSize}>size</Text>
                <Text style={styles.productTitleSize}>XS</Text>
              </TouchableOpacity>
              <Overlay
                height={300}
                containerStyle={styles.overlayContainer}
                isVisible={this.state.isVisible}
                onBackdropPress={() => this.setState({ isVisible: false })}
                overlayStyle={styles.overlayStyle}
              >
                <SizeRadioButtons size={size} />
              </Overlay>
            </View>
            <Button
              buttonStyle={styles.saveButton}
              titleStyle={styles.titleButtonStyle}
              title="ADD TO CART"
              icon={
                <View style={styles.appleLogoButtonContainer}>
                  <Text style={styles.priceInsideButtonText}>Rs {params.category[2].price}</Text>
                </View>
              }
              iconRight
              containerStyle={styles.saveButtonContainer}
              onPress={() => this.props.navigation.navigate("Cart")}
            />
            <View style={styles.tabsContainer}>
              <Button
                buttonStyle={styles.tabButton}
                titleStyle={styles.titleTabButton}
                title="Product information"
                icon={<Ionicons name="ios-arrow-round-forward" size={20} color="#000" />}
                iconRight
                type="clear"
                containerStyle={styles.saveButtonContainer}
                onPress={() => this.props.navigation.navigate("ProductInformation")}
              />
            </View>
            <View style={styles.relatedItemsHeadingContainer}>
              <Text style={styles.relatedItemsHeading}>YOU MIGHT ALSO LIKE</Text>
              <Text style={styles.titleTabButton}>17 items</Text>
            </View>
          </View>
          <View style={styles.relatedItemsCardsContainer}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => item.product_name}
              data={params.category}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.relatedItemCard}>
                  <Image style={styles.imageRelatedItem} source={{ uri: item.url }} />
                  <Text style={[styles.titleTabButton, styles.titleRelatedItem]}>{item.product_name}</Text>
                  <View style={styles.priceRowRelated}>
                    <Text style={styles.actualPriceRelated}>Rs {item.price}</Text>
                    <Text style={styles.oldPriceRelated}>Rs {item.price+((item.price*5)/100)}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
          
        </KeyboardAwareScrollView>
      </ThemeProvider>
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
    paddingHorizontal: 24,
  },
  contentContainer: {
    paddingBottom: 100,
  },
  swiperPicContainer: {
    height: height * 0.6,
    width,
    justifyContent: "center",
  },
  productSwiperPic: {
    height: height * 0.6,
    width,
    justifyContent: "center",
  },
  paginationStyle: {
    marginVertical: 0,
    bottom: -22,
  },
  paginationStyleItem: {
    width: 5,
    height: 5,
    marginHorizontal: 8,
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
    marginBottom: 16,
  },
  actualPrice: {
    // fontFamily: "work-sans-bold",
    fontSize: 21,
    // color: "#000",
    marginRight: 8,
    color: '#042E44',
  },
  oldPrice: {
    // fontFamily: "work-sans-bold",
    fontSize: 14,
    color: "#646464",
    textDecorationLine: "line-through",
  },
  productContent: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  productTitle: {
    maxWidth: 200,
    // fontFamily: "work-sans",
    fontSize: 18,
    textAlign: "center",
    color: '#042E44',
  },
  productDesc: {
    marginVertical: 16,
    // fontFamily: "work-sans",
    fontSize: 12,
    textAlign: "center",
    color: '#042E44',
  },
  attributeContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    borderTopWidth: 1,
    borderTopColor: "#000",
    paddingVertical: 24,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sizeButtonStyle: {
    borderLeftWidth: 1,
    flex: 43,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  titleButtonStyleSize: {
    marginRight: 16,
    // fontFamily: "work-sans",
    fontSize: 12,
    color: '#042E44',
  },
  productTitleSize: {
    // fontFamily: "work-sans-bold",
    fontSize: 18,
    color: '#042E44',
  },
  tabsContainer: {
    marginTop: 16,
  },
  tabButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 0,
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  titleTabButton: {
    // fontFamily: "work-sans",
    fontSize: 12,
    color: '#042E44',
  },
  relatedItemsHeadingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 32,
  },
  relatedItemsHeading: {
    // fontFamily: "work-sans-bold",
    fontSize: 14,
    color: '#042E44',
  },
  relatedItemsCardsContainer: {
    marginLeft: 24,
    marginTop: 16,
  },
  relatedItemCard: {
    marginRight: 8,
    flexDirection: "column",
    alignItems: "center",
    maxWidth: 130,
  },
  imageRelatedItem: {
    height: 200,
    width: 130,
  },
  titleRelatedItem: {
    marginTop: 8,
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
    color: "#F05829",
    marginRight: 8,
  },
  oldPriceRelated: {
    // fontFamily: "work-sans-bold",
    fontSize: 9,
    color: "#646464",
    textDecorationLine: "line-through",
  },
  overlayContainer: {
    backgroundColor: "rgba(0,0,0,.2)",
  },
  overlayStyle: {
    padding: 32,
    borderRadius: 0,
  },
  titleButtonStyle: {
    // fontFamily: "work-sans-bold",
    fontSize: 18,
    flex: 57,
    paddingBottom: 0,
    paddingTop: 0,
    backgroundColor: '#042E44'
  },
  appleLogoButtonContainer: {
    borderLeftWidth: 1,
    borderLeftColor: "#fff",
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "center",
    flex: 43,
    backgroundColor: '#042E44'
  },
  priceInsideButtonText: {
    // fontFamily: "work-sans-bold",
    fontSize: 18,
    color: "#fff",
    backgroundColor: '#042E44'
  },
  saveButton: {
    justifyContent: "space-around",
    borderRadius: 0,
    height: 55,
    marginTop: 32,
    backgroundColor: '#042E44'
  },
});
