import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './types';

import Step1Screen from '../screens/Step1';
import Step2Screen from '../screens/Step2';
import Step3Screen from '../screens/Step3';
import Step4Screen from '../screens/Step4';
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

        <Stack.Screen
            name="Step2"
            component={Step2Screen}
            options={{ title: 'Step 2' }}
        />

        <Stack.Screen
            name="Step3"
            component={Step3Screen}
            options={{ title: 'Step 3' }}
        />

        <Stack.Screen
            name="Step4"
            component={Step4Screen}
            options={{ title: 'Step 4' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;