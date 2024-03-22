import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.controls}>
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
      <Button title="Save" onPress={() => navigation.navigate('Details')} />
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
});
