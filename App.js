import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.textContainer, {backgroundColor: '#C9C9FF'}]}>
          <Text style={styles.text}>Purple: #C9C9FF</Text>
        </View>

        <View style={[styles.textContainer, {backgroundColor: '#3D85C6'}]}>
          <Text style={styles.text}>Blue: #3D85C6</Text>
        </View>
        <View style={[styles.textContainer, {backgroundColor: '#96CC96'}]}>
          <Text style={styles.text}>Green: #96CC96</Text>
        </View>
        <View style={[styles.textContainer, {backgroundColor: '#F4B940'}]}>
          <Text style={styles.text}>Yellow: #F4B940</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 10,
  },
  textContainer: {
    width: '100%',
    height: '20%',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  text: {
    fontWeight: 'bold',
  },
});
