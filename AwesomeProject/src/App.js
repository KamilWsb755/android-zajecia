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
import NewButton from './NewButton';
import Header from './Header';

const App = () => {

  const [name, SetName] = useState('');
  const [submit, setSubmit] = useState(false);

  const onPressHandler = () => {
    if (name.length > 3) {
      setSubmit(!submit);
    } else {
      ToastAndroid.show('The must be longer than 3 characters', ToastAndroid.LONG)
    }
  }

  const anotherPressHandler = () => {
    if (name.length > 3) {
      Alert.alert('Kliknięto', 'Przycisk został klikniety')
    } else {
      ToastAndroid.show('The must be longer than 3 characters', ToastAndroid.LONG)
    }
  }


  return (
    <ImageBackground style={styles.body}
      source={{ uri: 'https://cdn.pixabay.com/photo/2020/03/25/21/05/pizza-4968645_960_720.jpg' }}
    >
      <Header />
      <Text style={styles.text}>
        Please write your name:
      </Text>
      <TextInput
        style={styles.input}
        placeholder='write name'
        onChangeText={(value) => SetName(value)}
      />


      {/* Trzy */}
      <NewButton title={submit ? "Clear" : "Submit"} onPressFunction={onPressHandler}
        style={{}}
      />

      <NewButton title='ButtonExample' onPressFunction={anotherPressHandler}
        style={{ marginTop: 10, backgroundColor: '#000', width: 200 }}
      />

      {
        submit ? <View style={styles.body}>
          <Text style={styles.text}>You are registered as {name}</Text>
          <Image
            source={require('../assets/done.png')}
            style={styles.image}
            resizeMode={'stretch'}
          />
        </View> :
          <Image
            source={require('../assets/error.png')}
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
    color: '#fff'
  },
  text: {
    color: '#fff',
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
    color: '#fff'
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  }
});

export default App;
