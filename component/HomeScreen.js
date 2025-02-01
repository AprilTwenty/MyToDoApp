import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import styles from '../styles/HomeStyles';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    setTasks([...tasks, { key: Math.random().toString(), task: newTask }]);
    setNewTask('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My To-Do App</Text>
      <TextInput
        style={styles.input}
        value={newTask}
        onChangeText={setNewTask}
        placeholder="New task..."
      />
      <Button title="Add Task" onPress={addTask} />
      <FlatList
        data={tasks}
        renderItem={({ item }) => <Text style={styles.task}>{item.task}</Text>}
      />
    </View>
  );
};

export default Home;
