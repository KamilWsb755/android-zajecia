/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  RefreshControl,
} from 'react-native';


const App = () => {
  const [Items, setItems] = useState([
    { key: 1, item: 'Item 1' },
    { key: 2, item: 'Item 2' },
    { key: 3, item: 'Item 3' },
    { key: 4, item: 'Item 4' },
    { key: 5, item: 'Item 5' },
  ])
  const [Refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, { key: Items.length + 1, item: `Item ${Items.length + 1}` }])
    setRefreshing(false);
  }

  return (
    <ScrollView
      style={styles.body}
      refreshControl={
        <RefreshControl
          refreshing={false}
          onRefresh={onRefresh}
          colors={['#ff00ff']}
        />
      }
    >
      {
        Items.map((object) => {
          return (
            <View style={styles.item} key={object.key}>
              <Text style={styles.text}>{object.item}</Text>
            </View>
          )
        })
      }
    </ScrollView >
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
  item: {
    margin: 10,
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 45,
    fontStyle: 'italic',
    margin: 10,
  }
});

export default App;

