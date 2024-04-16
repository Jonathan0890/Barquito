import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from "react-native";

const ButonScreen = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/ocean.jpg')} style={styles.backgroundImage}>
            <View style={styles.main}>
                    <View style={[styles.imageContainer, { marginTop: 35 }]}>
                        <Image
                            source={require('../assets/Barco.png')}
                            style={styles.barcoImage}
                        />
                    </View>
                    </View>
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
        marginBottom: 80,
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
        borderRadius: 10,
        backgroundColor: 'darkblue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText:{
        color: 'white' ,
        fontSize: 30,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10, // Añadimos margen inferior
    },
    imageContainer: {
        marginBottom: 45,
    },
    barcoImage: {
        width: 150,
        height: 150,
    },
})