import React from 'react';
import 'react-native-gesture-handler';
import { FlowProvider } from './src/store/FlowContext';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <FlowProvider>
      <AppNavigator />
    </FlowProvider>
  )
}
