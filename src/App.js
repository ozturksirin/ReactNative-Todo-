import React, { useState } from 'react';

import { View, StyleSheet } from 'react-native';

import Body from './components/BodyCard/Body';
import Header from './components/HeaderCard/Header';
import Bottom from './components/BottomCard/Bottom';

const App = (props) => {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  return (

    <View style={styles.container}>
      <Header number={number} />
      <Body tasks={tasks} />

      <Bottom setNumber={setNumber}
        text={text}
        setText={setText}
        tasks={tasks}
        setTasks={setTasks}
      />

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
