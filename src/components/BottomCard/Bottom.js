import React, {useState} from 'react';

import {
  View,
  Text,
  Stylesheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Header} from 'react-native/Libraries/NewAppScreen';

import styles from './Bottom.styles';

const Bottom = ({setNumber}) => {
  return (
    <View style={styles.bottomContainer}>
      <TextInput
        style={styles.input}
        placeholder="Yapılacaklar..."
        onChangeText={text => setText(text)}></TextInput>

      <View style={styles.seperator}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setNumber(p => p + 1)}>
          <Text style={styles.buttonText}>KAYDET</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Bottom;
