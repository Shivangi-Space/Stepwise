import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './types';

import Step1Screen from '../screens/Step1';
import { COLORS } from '../constants/theme';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: COLORS.background },
          headerShadowVisible: false,
          headerTitleStyle: { fontWeight: 'bold', color: COLORS.textPrimary },
        }}
      >
        <Stack.Screen 
          name="Step1" 
          component={Step1Screen} 
          options={{ title: 'Age Range' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;