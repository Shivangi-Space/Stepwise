import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Container from "../components/Container";
import { COLORS, SIZES } from "../constants/theme";
import { useFlow } from "../store/FlowContext";

const Step1Screen = () => {
  const { formData, updateFormData } = useFlow();

  return (
    <Container>
      <View style={styles.header}>
        <Text style={styles.stepText}>Step 1 of 5</Text>
        <Text style={styles.title}>How old are you?</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        keyboardType="numeric"
        value={formData.age}
        onChangeText={(val) => updateFormData({ age: val })}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
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
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 15,
    borderRadius: SIZES.radius,
    fontSize: 16,
    backgroundColor: COLORS.white,
    marginBottom: 20,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 18,
    borderRadius: SIZES.radius,
    alignItems: "center",
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Step1Screen;
