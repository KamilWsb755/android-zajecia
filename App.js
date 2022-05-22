/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


const App = () => {

  return (
    <View style={styles.body}>
      <View style={styles.view1}>
        <Text style={styles.text}>1</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text}>2</Text>
      </View>
      <View style={styles.view3}>
        <Text style={styles.text}>3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    margin: 10,
    flexDirection: 'column',
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view1: {
    width: 100,
    height: 100,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    width: 100,
    height: 100,
    backgroundColor: '#ff00ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    width: 100,
    height: 100,
    backgroundColor: '#ffff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 35,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;

