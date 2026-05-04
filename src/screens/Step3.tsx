import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput
} from "react-native";
import Container from "../components/Container";
import ProgressBar from "../components/ProgressBar";
import AppButton from "../components/AppButton";
import { COLORS, SIZES } from "../constants/theme";
import { useFlow } from "../store/FlowContext";
import { usePersistence } from "../hooks/usePersistence";

const Step3Screen = ({navigation}: any) => {

    const { formData, updateFormData } = useFlow();
    const {saveProgress} = usePersistence();

    const handleNext = () => {
        saveProgress(formData);
        navigation.navigate('Step4');
    }

    return(
        <Container>
            <ProgressBar currentStep={3} totalSteps={5} />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Target Weight Loss
                </Text>

                <Text style={styles.subtitle}>
                    How many kilograms do you want to lose?
                </Text>

                <TextInput
                style={styles.input}
                placeholder="e.g. 5"
                keyboardType="numeric"
                value={formData.extraDetails}
                onChangeText={(val) => updateFormData({ extraDetails: val })}                
                />
            </View>

            <View style={styles.footer}>
                <AppButton title="Back" variant="secondary" onPress={() => navigation.goBack} />
                <AppButton title="Next" onPress={handleNext} disabled={!formData.extraDetails} />
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1
    },
    title: {
        fontSize: SIZES.fontTitle,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        color: COLORS.textSecondary,
        marginVertical: 10,
        marginBottom: 20
    },
    input: {
        borderWidth: 1,
        borderColor: COLORS.border,
        padding: 15,
        borderRadius: SIZES.radius,
        fontSize: 18,
        backgroundColor: COLORS.white
    },
    footer: {
        marginTop: 'auto'
    }
})

export default Step3Screen;