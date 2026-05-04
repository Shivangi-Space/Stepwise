import React from "react";
import { View, StyleSheet } from 'react-native';
import { COLORS } from "../constants/theme";

interface ProgressBarProps {
    currentStep: number;
    totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
    const progress = (currentStep / totalSteps) * 100;

    return (
        <View style={styles.container}>
            <View style={[styles.filler, { width: `${progress}%` }]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 6,
        backgroundColor: COLORS.border,
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 20,
    },
    filler: {
        height: '100%',
        backgroundColor: COLORS.primary,
    },
});

export default ProgressBar;