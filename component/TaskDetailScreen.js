import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import styles from '../styles/TaskDetailStyles';


const TaskDetailScreen = ({ route, navigation }) => {
  const { task, key, updateTask } = route.params;
  const [taskDetail, setTaskDetail] = useState(task);

  const handleSave = () => {
    updateTask(key, taskDetail);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Detail</Text>
      <TextInput
        style={styles.input}
        value={taskDetail}
        onChangeText={setTaskDetail}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};


export default TaskDetailScreen;
