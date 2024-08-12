import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import HomeScreen from './HomeScreen';

// Define the types for the navigation parameters
type RootStackParamList = {
  Login: undefined;
  Home: { userEmail: string };
  SignUp: undefined;
};

// Create the stack navigator
const Stack = createStackNavigator<RootStackParamList>();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="SignUp">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
