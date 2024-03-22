import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';

export default function App() {
  return (
    <ImageBackground source={require('./assets/ocean.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
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
        
        <TouchableOpacity style={styles.StartButton} onPress={() => navigation.navigate('Details')}>
          <Text style={styles.saveButtonText}>Avanzar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.StopButton} onPress={() => navigation.navigate('Details')}>
          <Text style={styles.saveButtonText}>Detener</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.GraphButton} onPress={() => navigation.navigate('Details')}>
          <Text style={styles.saveButtonText}>Gráfica  </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  controls: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 20,
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
  circularButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
  },
  StartButton: {
    backgroundColor: 'green',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 20,
  },
  StopButton: {
    backgroundColor: 'red',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 20,
  },
  GraphButton: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 20,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
