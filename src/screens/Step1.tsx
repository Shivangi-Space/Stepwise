import React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import Container from "../components/Container";
import { COLORS, SIZES } from "../constants/theme";
import { useFlow } from "../store/FlowContext";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/types";
import AppButton from "../components/AppButton"; // Reusable Button
import ProgressBar from "../components/ProgressBar"; // Reusable Progress Bar

// Navigation ka type define karein
type Step1NavProp = StackNavigationProp<RootStackParamList, "Step1">;

interface Props {
  navigation: Step1NavProp;
}

const Step1Screen = ({ navigation }: Props) => {
  const { formData, updateFormData } = useFlow();

  // Validation: Age empty nahi honi chahiye aur number honi chahiye
  const isNextDisabled = !formData.age || isNaN(Number(formData.age));

  return (
    <Container>
      {/* Progress Bar Add Kiya */}
      <ProgressBar currentStep={1} totalSteps={5} />

      <View style={styles.header}>
        <Text style={styles.stepText}>Step 1 of 5</Text>
        <Text style={styles.title}>How old are you?</Text>
      </View>

      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Enter your age"
          keyboardType="numeric"
          value={formData.age}
          onChangeText={(val) => updateFormData({ age: val })}
          placeholderTextColor={COLORS.textSecondary}
        />
      </View>

      <View style={styles.footer}>
        <AppButton 
          title="Next" 
          onPress={() => navigation.navigate("Step2")} 
          disabled={isNextDisabled} // Validation logic
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 30,
  },
  stepText: {
    color: COLORS.primary,
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 8,
  },
  title: {
    fontSize: SIZES.fontTitle,
    fontWeight: "bold",
    color: COLORS.textPrimary,
  },
  content: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 15,
    borderRadius: SIZES.radius,
    fontSize: 16,
    backgroundColor: COLORS.white,
    color: COLORS.textPrimary,
  },
  footer: {
    marginTop: "auto", 
  },
});

export default Step1Screen;