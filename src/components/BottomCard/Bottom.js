import React from 'react';

import {
  View,
  Text,
  Stylesheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import styles from './Bottom.styles';

const Bottom = () => {
  return (
    <View style={styles.bottomContainer}>
      <TextInput placeholder="Yapılacak.." style={styles.input}></TextInput>

      <View style={styles.seperator}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>KAYDET</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Bottom;
