import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import styles from './Body.styles';

const Body = ({ tasks }) => {



  return (
    <View>
      {
        tasks.map((task, i) => {
          return (
            <View key={i} style={styles.listCard}>
              <TouchableOpacity style={styles.opacity}>
                <Text style={styles.text}>{task} </Text>
              </TouchableOpacity>
            </View>
          );
        })
      }
    </View>
  );
};

export default Body;

