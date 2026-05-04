import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { FlowProvider, useFlow } from './src/store/FlowContext';
import AppNavigator from './src/navigation/AppNavigator';
import { usePersistence } from './src/hooks/usePersistence';

const MainLayout = () => {
  const { updateFormData } = useFlow();
  const { loadProgress } = usePersistence();

  useEffect(() => {
    const resumeFlow = async () => {
      const savedData = await loadProgress();
      if (savedData) {
        updateFormData(savedData);
      }
    };
    resumeFlow();
  }, []);

  return <AppNavigator />;
};

export default function App() {
  return (
    <FlowProvider>
      <MainLayout />
    </FlowProvider>
  );
}