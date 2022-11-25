import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

import Body from './components/BodyCard/Body';
import Header from './components/HeaderCard/Header';

import Bottom from './components/BottomCard/Bottom';

const App = () => {
  return (
    <View style={styles.container}>
      <Header></Header>
      <Body></Body>
      <Bottom></Bottom>
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
