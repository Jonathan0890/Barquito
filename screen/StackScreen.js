import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
const StackScreen = () => {
    const navigation = useNavigation();
    return (
        <ImageBackground source={require('../assets/ocean.jpg')} style={styles.container}>
            <Text style={styles.title}>Objetivo</Text>
            <Text style={styles.body}>Ocean Jasper aborda la problemática de la calidad pobre en el agua, proporcionando una forma de monitorearla y ayudar significativamente a prevenir la contaminación del agua.</Text>
            
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        textAlign: "center",
        marginTop: "20%",
        color: "white",
        fontWeight: "bold",
    },
    body: {
        fontSize: 20,
        textAlign: "center",
        marginTop: "20%",
        color: "black",
        fontWeight: "bold",
    },
    button: {
        marginTop: 40,
        width: "50%",
        backgroundColor: "blue",
        padding: 10,
        borderRadius: 10,
        alignSelf: "center",
    },
    buttonText: {
        fontSize: 30,
        textAlign: "center",
        color: "white",
    },
});
export default StackScreen;