import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <ImageBackground source={require('../assets/ocean.jpg')} style={styles.container}>
            <Text style={styles.title}>OCEAN JASPER</Text>
            <Text style={styles.body}>Utiliza la pantalla de control para manejar el barco y monitorea los datos a través de la pantalla de gráficos.</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Stack")}
                style={styles.button}>
                <Text style={styles.buttonText}>Objetivo</Text>
            </TouchableOpacity>
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
        color: "white",
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

export default HomeScreen;
