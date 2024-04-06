import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from "react-native";

const ButonScreen = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/ocean.jpg')} style={styles.backgroundImage}>
                <View style={styles.controls}>
                    <View style={styles.row}>
                        <View style={styles.middleButton}></View>
                        <TouchableOpacity style={styles.circularButton}>
                            <Text style={styles.buttonText}>↑</Text>
                        </TouchableOpacity>
                        <View style={styles.middleButton}></View>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.circularButton}>
                            <Text style={styles.buttonText}>←</Text>
                        </TouchableOpacity>
                        <View style={styles.middleButton}></View>
                        <TouchableOpacity style={styles.circularButton}>
                            <Text style={styles.buttonText}>→</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.middleButton}></View>
                        <TouchableOpacity style={styles.circularButton}>
                            <Text style={styles.buttonText}>↓</Text>
                        </TouchableOpacity>
                        <View style={styles.middleButton}></View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

export default ButonScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    controls: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: 20,
        alignItems: 'center',
        marginTop: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    button: {
        marginTop: 20,
    },
    circularButton: {
        width: 60,
        height: 60,
        borderRadius: 40,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    middleButton: {
        width: 60,
        height: 60,
    },
    circularButton: {
        width: 60,
        height: 60,
        borderRadius: 40,
        backgroundColor: 'darkblue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText:{
        color: 'white' ,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
})