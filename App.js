// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewsStack from './src/navigation/newsStack';



function App() {
  return (
    <NavigationContainer>
      <NewsStack />
    </NavigationContainer>
  );
}

export default App;