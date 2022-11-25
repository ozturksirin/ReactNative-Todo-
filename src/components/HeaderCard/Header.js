import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

import styles from './Header.styles';
const Header = ({head}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <Text style={styles.title}>Yapılacaklar</Text>
        <Text style={styles.number}>0</Text>
      </View>
    </View>
  );
};

export default Header;
