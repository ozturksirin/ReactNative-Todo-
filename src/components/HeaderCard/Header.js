import React, {useState, useEffect} from 'react';

import {View, Text, StyleSheet} from 'react-native';

// import Bottom from '../BottomCard/Bottom';

import styles from './Header.styles';
const Header = props => {
  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <Text style={styles.title}>Yapılacaklar</Text>
        <Text style={styles.number}>{props.number}</Text>
      </View>
    </View>
  );
};

export default Header;
