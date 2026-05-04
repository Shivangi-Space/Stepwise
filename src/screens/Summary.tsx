import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import Container from '../components/Container';
import AppButton from '../components/AppButton';
import { COLORS, SIZES, SHADOW } from '../constants/theme';
import { useFlow } from '../store/FlowContext';
import { apiService } from '../services/apiService';
import { usePersistence } from '../hooks/usePersistence';

const SummaryScreen = ({ navigation }: any) => {
  const { formData, resetForm } = useFlow();
  const { clearProgress } = usePersistence();
  const [loading, setLoading] = useState(false);

  const handleFinalSubmit = async () => {
    setLoading(true);
    try {
      await apiService.saveProgress(formData);
      await clearProgress(); 
      resetForm();
      Alert.alert("Success", "Your data has been saved!", [
        { text: "OK", onPress: () => navigation.navigate('Step1') }
      ]);
    } catch (error) {
      Alert.alert("Error", "Server submission failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const SummaryItem = ({ label, value }: { label: string, value: any }) => (
    <View style={styles.item}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{Array.isArray(value) ? value.join(', ') : value || 'N/A'}</Text>
    </View>
  );

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Review Your Details</Text>
        
        <View style={styles.card}>
          <SummaryItem label="Age" value={formData.age} />
          <SummaryItem label="Goal" value={formData.goal.replace('_', ' ').toUpperCase()} />
          
          {formData.goal === 'weight_loss' && (
            <SummaryItem label="Target Loss" value={`${formData.extraDetails} kg`} />
          )}
          
          <SummaryItem label="Preferences" value={formData.preferences} />
        </View>

        <AppButton 
          title="Edit Responses" 
          variant="secondary" 
          onPress={() => navigation.navigate('Step1')} 
        />
      </ScrollView>

      <View style={styles.footer}>
        <AppButton 
          title="Submit Everything" 
          onPress={handleFinalSubmit} 
          loading={loading}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  title: { fontSize: SIZES.fontTitle, fontWeight: 'bold', marginBottom: 20 },
  card: {
    backgroundColor: COLORS.white,
    padding: 20,
    borderRadius: SIZES.radius,
    ...SHADOW,
    marginBottom: 20,
  },
  item: { marginBottom: 15, borderBottomWidth: 1, borderBottomColor: COLORS.border, paddingBottom: 10 },
  label: { fontSize: 14, color: COLORS.textSecondary, marginBottom: 4 },
  value: { fontSize: 18, fontWeight: '600', color: COLORS.textPrimary },
  footer: { paddingVertical: 10 }
});

export default SummaryScreen;