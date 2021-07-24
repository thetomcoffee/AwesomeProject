import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View, Text, TextInput, Image, Button } from 'react-native';

const App = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    let rightNow = new Date();
    let date = rightNow.getDate();
    let month = rightNow.getMonth() + 1;
    let year = rightNow.getFullYear();
    let hours = rightNow.getHours();
    let min = rightNow.getMinutes();
    let sec = rightNow.getSeconds();
    let amOrPm = '';
    let minZero = '';
    let secZero = '';

    if (hours >= 12) {
      amOrPm = 'PM';
      if (hours > 12)
        hours = hours - 12;
    }
    else
      amOrPm = 'AM';

    if (min < 10)
      minZero = '0';

    if (sec < 10)
      secZero = '0'

    setCurrentDate(
      month + '/' + date + '/' + year
      + ' ' + hours + ':' + minZero + min + ':' + secZero + sec + ' ' + amOrPm
    );
  }, []);

  const [isPressed, setIsPressed] = useState(true);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          Hello, and welcome to the Awesome Project!
        </Text>
        <Text style={styles.textStyle}>
          Current Date Time
        </Text>
        <Text style={styles.textStyle}>
          {currentDate}
        </Text>
        <Text>What's your name? Please enter it below:</Text>
        <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="Name"
        />
        <Text>Here's an image of a cat for no reason:</Text>
        <Image
        source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
        style={{width: 200, height: 200}}
        />
      </View>

      <Text>
        Has the button been pressed? { isPressed ? "No!" : "Yes!" }
      </Text>
      <Button
        onPress={() => {
          setIsPressed(false);
        }}
        disabled={!isPressed}
        title={isPressed ? "Press this button, please!" : "Thank you!"}
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 14,
    color: 'black',
  },
});

export default App;