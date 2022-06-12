import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

const App = () => {

  const [name, SetName] = useState('');
  const [submit, setSubmit] = useState(false);

  const onPressHandler = () => {
    setSubmit(!submit);
  }


  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Please write your name:
      </Text>
      <TextInput
        style={styles.input}
        placeholder='write name'
        // secureTextEntry
        onChangeText={(value) => SetName(value)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={onPressHandler}
      >
        <Text style={styles.text}>
          {submit ? 'Clear' : 'Submit'}
        </Text>
      </TouchableOpacity>
      {
        submit ? <Text style={styles.text}>You are registered as {name}</Text> : null
      }
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
  },
});

export default App;
