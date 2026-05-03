import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Container from "../components/Container";
import ProgressBar from "../components/ProgressBar";
import AppButton from "../components/AppButton";
import { COLORS, SIZES } from "../constants/theme";
import { useFlow } from "../store/FlowContext";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/types";

type Step2NavProp = StackNavigationProp<RootStackParamList, 'Step2'>;

const GOALS = [
  { 
    id: 'weight_loss', 
    label: 'Weight Loss 🏃‍♂️' 
},
  { 
    id: 'muscle_gain', 
    label: 'Muscle Gain 💪' 
},
  { 
    id: 'stay_fit', 
    label: 'Stay Fit 🧘'
 },
];

const Step2Screen = ({ navigation }: {navigation: Step2NavProp }) => {

    const { formData, updateFormData } = useFlow();



    return (
        <Container>
            <ProgressBar currentStep={2} totalSteps={5} />

            <View style={styles.content}>
                <Text style={styles.title}>
                    What is your primary goal?
                </Text>

                {GOALS.map((goal) => (
                    <TouchableOpacity
                    key={goal.id}
                    style={[
                        styles.card,
                        formData.goal === goal.id && styles.selectedCard
                    ]}
                    onPress={() => updateFormData({ goal: goal.id })}
                    >
                        <Text style={[
                            styles.cardText,
                            formData.goal === goal.id && styles.selectedCardText
                        ]}>
                            {goal.label}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.footer}>
                <AppButton title="Back" variant="secondary" onPress={() => navigation.goBack()} />

                <AppButton
                    title="Next"
                    onPress={handleNext}
                    disabled={!formData.goal}
                />
            </View>
        </Container>
    );
};

export default Step2Screen;

