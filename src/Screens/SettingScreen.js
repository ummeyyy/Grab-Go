import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    AsyncStorage
} from "react-native";

class SettingScreen extends Component {

    signOut = async () => {
        AsyncStorage.clear()
        this.props.navigation.navigate('AuthLoading')
    }
    render() {
        return (
            <View style={styles.container}>
                <Button title="Sign Out" onPress={this.signOut} />
            </View>
        );
    }
}
export default SettingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});