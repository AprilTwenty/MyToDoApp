import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/TaskDetailStyles';

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    loadTasks();
  }, []);

  const saveTasks = async (tasks) => {
    try {
      const jsonTasks = JSON.stringify(tasks);
      await AsyncStorage.setItem('tasks', jsonTasks);
    } catch (error) {
      console.error(error);
    }
  };

  const loadTasks = async () => {
    try {
      const jsonTasks = await AsyncStorage.getItem('tasks');
      if (jsonTasks !== null) {
        setTasks(JSON.parse(jsonTasks));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addTask = () => {
    const updatedTasks = [...tasks, { key: Math.random().toString(), task: newTask }];
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
    setNewTask('');
  };

  const updateTask = (key, newTask) => {
    const updatedTasks = tasks.map(task => (task.key === key ? { key, task: newTask } : task));
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
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
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('TaskDetail', { task: item.task, key: item.key, updateTask })}>
            <Text style={styles.task}>{item.task}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};



export default HomeScreen;
