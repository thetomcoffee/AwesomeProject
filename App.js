import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

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

    if(min < 10)
        minZero = '0';

    if(sec < 10)
        secZero = '0'

    setCurrentDate(
      month + '/' + date + '/' + year 
      + ' ' + hours + ':' + minZero + min + ':' + secZero + sec + ' ' + amOrPm
    );
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
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

      </View>
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