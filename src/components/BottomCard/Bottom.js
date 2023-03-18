import React, { useState } from 'react';

import {
  View,
  Text,
  Stylesheet,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from 'react-native';

import styles from './Bottom.styles';

const Bottom = ({ text, setText, setTasks, setNumber }) => {

  const handleChanges = (e) => {
    setText(e);
  };

  const handleSubmit = () => {
    setTasks((prev) => [...prev, text]);
    Keyboard.dismiss();
    setText("");

    setNumber((counter) => counter + 1);

  };

  return (
    <View style={styles.bottomContainer}>
      <TextInput
        style={styles.input}
        placeholder="Yapılacaklar..."
        value={text}
        onChangeText={handleChanges}
      >
      </TextInput>

      <View style={styles.seperator}>
        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.buttonText} onPress={handleSubmit}>KAYDET</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Bottom;
