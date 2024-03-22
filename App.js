import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.controls}>
        <View style={styles.circle}>
          <View style={styles.row}>
            <View style={styles.middleButton}></View>
            <Button title="↑" onPress={() => {}} />
            <View style={styles.middleButton}></View>
          </View>
          <View style={styles.row}>
            <Button title="←" onPress={() => {}} />
            <View style={styles.middleButton}></View>
            <Button title="→" onPress={() => {}} />
          </View>
          <View style={styles.row}>
            <View style={styles.middleButton}></View>
            <Button title="↓" onPress={() => {}} />
            <View style={styles.middleButton}></View>
          </View>
        </View>
      </View>
      <View style={styles.button}>
        <Button title="Ir a la Gráfica" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controls: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 20,
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
