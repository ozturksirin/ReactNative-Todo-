import React, {useState} from 'react';

import {View, Text, StyleSheet, TextInput, FlatList} from 'react-native';

import Body from './components/BodyCard/Body';
import Header from './components/HeaderCard/Header';
import Bottom from './components/BottomCard/Bottom';

const App = () => {
  const [number, setNumber] = useState(0);
  return (
    <View style={styles.container}>
      <Header number={number}></Header>

      <FlatList></FlatList>

      <Body></Body>

      <Bottom setNumber={setNumber}></Bottom>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027',
  },
});
