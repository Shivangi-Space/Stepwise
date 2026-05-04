import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Container from "../components/Container";
import ProgressBar from "../components/ProgressBar";
import AppButton from "../components/AppButton";
import { COLORS, SIZES } from "../constants/theme";

import { useNavigation } from '@react-navigation/native';
import { useFlow } from "../store/FlowContext";

const PREFERENCES = [
  "Vegan",
  "Gluten-Free",
  "High-Protein",
  "Keto",
  "Dairy-Free",
  "No Sugar",
];

const Step4Screen = () => {

  const navigation = useNavigation<any>();
  const { formData, updateFormData } = useFlow();

  const togglePreference = (item: string) => {
    let updated = [...formData.preferences];
    if (updated.includes(item)) {
      updated = updated.filter((i) => i !== item);
    } else {
      updated.push(item);
    }
    updateFormData({ preferences: updated });
  };

  return (
    <Container>
      <ProgressBar currentStep={4} totalSteps={5} />

      <ScrollView style={styles.content}>
        <Text style={styles.title}>Preferences</Text>
        <Text style={styles.subtitle}>
          Select one or more dietary preferences
        </Text>

        <View style={styles.chipContainer}>
          {PREFERENCES.map((pref) => {
            const isSelected = formData.preferences.includes(pref);
            return (
              <TouchableOpacity
                key={pref}
                style={[styles.chip, isSelected && styles.selectedChip]}
                onPress={() => togglePreference(pref)}
              >
                <Text
                  style={[
                    styles.chipText,
                    isSelected && styles.selectedChipText,
                  ]}
                >
                  {pref} {isSelected ? "✓" : "+"}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <AppButton
          title="Back"
          variant="secondary"
          onPress={() => navigation.goBack()} 
        />
        <AppButton
          title="See Summary"
          onPress={() => navigation.navigate("Summary")}
          disabled={formData.preferences.length === 0}
        />
      </View>
    </Container>
  );
};

export default Step4Screen;

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  title: {
    fontSize: SIZES.fontTitle,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.textSecondary,
    marginBottom: 20,
  },
  chipContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.white,
  },
  selectedChip: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  chipText: {
    color: COLORS.textPrimary,
    fontWeight: "500",
  },
  selectedChipText: {
    color: COLORS.white,
  },
  footer: {
    marginTop: 20,
  },
});
