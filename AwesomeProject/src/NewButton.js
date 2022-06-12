import React from 'react';
import {
    StyleSheet,
    Text,
    Pressable,
} from 'react-native';



const NewButton = (props) => {
    // props.nazwaKlucza
    return (
        <Pressable
            style={({ pressed }) => [
                { backgroundColor: pressed ? '#ddd' : '#0f0' },
                styles.button,
                { ...props.style }
            ]}
            // onPressHandler z App.js
            onLongPress={props.onPressFunction}
            delayLongPress={300}
            hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
        >
            <Text style={styles.text}>
                {/* Tutaj ukryty jest ten nasz {submit ? "Clear" : "Submit"} */}
                {props.title}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        // backgroundColor: '#ffffff',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 20,
        margin: 10,
    },
    button: {
        width: 150,
        height: 50,
        alignItems: 'center',
    },
});

export default NewButton;