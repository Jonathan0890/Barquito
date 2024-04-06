import React from "react";
import { BarChart } from "react-native-chart-kit";
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from "react-native";

const GraficaScreen = () => {
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
                    <View style={styles.chartContainer}>
                        <BarChart
                            data={{
                                labels: ['Nivel de turbidez'],
                                datasets: [
                                    {
                                        data: [90, 45, 190, 267, 300,],
                                    },
                                ],
                            }}
                            width={300}
                            height={220}
                            yAxisLabel={''}
                            chartConfig={{
                                backgroundColor: '#e26a00',
                                backgroundGradientFrom: '#124076',
                                backgroundGradientTo: '#124076',
                                decimalPlaces: 2,
                                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                style: {
                                    borderRadius: 8,
                                },
                            }}
                            style={{
                                marginVertical: 2,
                                borderRadius: 4,
                            }}
                        />
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

export default GraficaScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10, // Añadimos margen inferior
    },
    imageContainer: {
        marginBottom: 80,
    },
    chartContainer: {
        width: '70%',
        marginBottom: 40, // Añadimos margen inferior
    },
    barcoImage: {
        width: 150,
        height: 150,
    },
})