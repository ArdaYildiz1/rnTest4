import React from 'react';
import {ImageBackground, Button, Alert, Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64
};

const App = () => (
    <ScrollView style={styles.container}>
        <Text style={{ fontSize: 96}}>Scroll me please!</Text>
        <Image fadeDuration={3000} blurRadius={2} style={{width:250, height: 250, alignSelf:"center", margin: 5}} source={logo}/>
        <Text style={{fontSize:10, alignSelf:"center"}}>Above is a blurry image with fade effect</Text>
        <Image style={{width:250, height: 250, alignSelf:"center", margin: 20}} source={logo}/>

        <View style={styles.buttonStyle}>
            <Button
                onPress={() => {
                    Alert.alert("--- Alert box 1 ---", "Do you like the alert box? (Y/N)",
                        [
                            {text: "Yes"},
                            {text: "No"}]);
                }}
                title="First Button"
            />
        </View>

        <View style={styles.buttonStyle}>
            <Button
                onPress={() => {
                    Alert.alert("--- Alert box 2 ---","You tapped the button!");
                }}
                title="Second Button"
            />
        </View>
    </ScrollView>
);

const styles = StyleSheet.create({

    container: {
        flex:1,
        padding: 20,
        backgroundColor: "lightblue"
    },

    buttonStyle: {
        alignSelf:"center",

        height: 60,
        width: 160
    }
});

export default App;