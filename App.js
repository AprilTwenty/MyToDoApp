import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './component/LoginScreen';
import HomeScreen from './component/HomeScreen';
import RegisterScreen from './component/RegisterScreen';
import TaskDetailScreen from './component/TaskDetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name='TaskDetail' component={TaskDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
