import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>BarcoProject</Text>
      </View>
      <View style={styles.main}>
        <View style={[styles.imageContainer, {marginTop: 85}]}>
          <Image
            source={require('./assets/barco.jpeg')}
            style={styles.barcoImage}
          />
        </View>
        <View style={styles.chartContainer}>
          <BarChart
            data={{
              labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
              datasets: [
                {
                  data: [20, 45, 28, 80, 99, 43],
                },
              ],
            }}
            width={300}
            height={220}
            yAxisLabel={'$'}
            chartConfig={{
              backgroundColor: '#e26a00',
              backgroundGradientFrom: '#fb8c00',
              backgroundGradientTo: '#ffa726',
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
      <View style={styles.controls}>
        <View style={styles.circle}>
          <View style={styles.row}>
            <View style={styles.middleButton}></View>
            <Button title="↑" onPress={() => { }} />
            <View style={styles.middleButton}></View>
          </View>
          <View style={styles.row}>
            <Button title="←" onPress={() => { }} />
            <View style={styles.middleButton}></View>
            <Button title="→" onPress={() => { }} />
          </View>
          <View style={styles.row}>
            <View style={styles.middleButton}></View>
            <Button title="↓" onPress={() => { }} />
            <View style={styles.middleButton}></View>
          </View>
        </View>
      </View>
      <View style={styles.button}>
        <Button title="Ir a la Gráfica" onPress={() => { }} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>&copy; 2024 BarcoProject. Todos los derechos reservados.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#35424a',
    paddingVertical: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20, // Añadimos margen inferior
  },
  imageContainer: {
    marginBottom: 20,
  },
  barcoImage: {
    width: 100,
    height: 100,
  },
  chartContainer: {
    width: '70%',
    marginBottom: 20, // Añadimos margen inferior
  },
  footer: {
    backgroundColor: '#35424a',
    paddingVertical: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
  },
  controls: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 20,
    alignItems: 'center',
  },
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'black',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  middleButton: {
    width: 60,
    height: 60,
  },
  button: {
    marginTop: 20,
  }
});
