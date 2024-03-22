import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const Graph = () => {
  return (
    <ImageBackground source={require('./assets/ocean.jpg')} style={styles.backgroundImage}>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>BarcoProject</Text>
      </View>
      <View style={styles.main}>
        
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Calidad del agua-Sensor TDS</Text>
          {/* Agregar aquí tu componente de gráfica */}
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>&copy; 2024 BarcoProject. Todos los derechos reservados.</Text>
      </View>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#35424a',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
  },
  main: {
    flex: 1,
    padding: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  barcoImg: {
    width: '100%',
    height: 'auto',
  },
  card: {
    backgroundColor: '#17c1e8',
    padding: 20,
    borderRadius: 10,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 10,
  },
  footer: {
    backgroundColor: '#35424a',
    alignItems: 'center',
    padding: 20,
  },
  footerText: {
    color: '#fff',
  },
});



export default Graph;
