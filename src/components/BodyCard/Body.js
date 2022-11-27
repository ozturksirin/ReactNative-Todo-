import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

import styles from './Body.styles';

const Body = ({list}) => {
  return (
    <View style={styles.listCard}>
      <Text style={styles.text}>Body</Text>
    </View>
  );
};

export default Body;
