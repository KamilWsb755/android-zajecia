import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Pressable,
  Alert,
  ToastAndroid,
  Image,
  ImageBackground,
} from 'react-native';

const App = () => {

  const [name, SetName] = useState('');
  const [submit, setSubmit] = useState(false);

  const onPressHandler = () => {
    if (name.length > 3) {
      setSubmit(!submit);
    } else {
      // Alert.alert('Warning!', 'The name must be longer than 3 characters')
      ToastAndroid.show('The must be longer than 3 characters', ToastAndroid.LONG)
    }
  }


  return (
    <ImageBackground style={styles.body}
      source={{ uri: 'https://cdn.pixabay.com/photo/2020/03/25/21/05/pizza-4968645_960_720.jpg' }}
    >
      <Text style={styles.text}>
        Please write your name:
      </Text>
      <TextInput
        style={styles.input}
        placeholder='write name'
        // secureTextEntry
        onChangeText={(value) => SetName(value)}
      />

      {/* Pierwszy typ przycisku: */}
      {/* <Button
        title={submit ? "Clear" : 'Submit'}
        onPress={onPressHandler}
      /> */}

      {/* Przycisk wariant 2: */}
      {/* <TouchableOpacity
        style={styles.button}
        onPress={onPressHandler}
        activeOpacity={0.1}
      >
        <Text style={styles.text}>
          {submit ? 'Clear' : 'Submit'}
        </Text>
      </TouchableOpacity> */}

      {/* 3 typ przycisku: */}
      {/* <TouchableHighlight
        style={styles.button}
        onPress={onPressHandler}
        underlayColor={'#ddd'}
      >
        <Text style={styles.text}>
          {submit ? 'Clear' : 'Submit'}
        </Text>
      </TouchableHighlight> */}


      {/* Czwarty przycisk */}
      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? '#ddd' : '#0f0' },
          styles.button
        ]}
        onLongPress={onPressHandler}
        delayLongPress={300}
        hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
      >
        <Text style={styles.text}>
          {submit ? 'Clear' : 'Submit'}
        </Text>
      </Pressable>
      {
        submit ? <View style={styles.body}>
          <Text style={styles.text}>You are registered as {name}</Text>
          <Image
            // source={{ uri: 'https://cdn.pixabay.com/photo/2020/03/25/21/05/pizza-4968645_960_720.jpg' }}
            source={require('./assets/done.png')}
            // blurRadius={3}
            style={styles.image}
            resizeMode={'stretch'}
          />
        </View> :
          <Image
            source={require('./assets/error.png')}
            style={styles.image}
            resizeMode={'stretch'}
          />
      }
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    // backgroundColor: '#ffffff',
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
    marginBottom: 10,
  },
  button: {
    width: 150,
    height: 50,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  }
});

export default App;
