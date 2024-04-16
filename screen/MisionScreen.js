import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
const MisionScreen = () => {
    const navigation = useNavigation();
    return (
        <ImageBackground source={require('../assets/ocean.jpg')} style={styles.container}>
            <Text style={styles.title}>Nuestra misión</Text>
            <Text style={styles.body}>Contribuir a la preservación y mejora de la calidad del agua, mediante el desarrollo e implementación de un barco que proporcione datos precisos sobre la calidad del agua.</Text>
            
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
        marginBottom: 100,
        color: "darkblue",
        fontWeight: "bold",
    },
    body: {
        fontSize: 20,
        textAlign: "center",
        marginTop: "1%",
        marginBottom: 100,
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
export default MisionScreen;