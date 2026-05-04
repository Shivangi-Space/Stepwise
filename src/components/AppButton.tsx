import React from "react";
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    ActivityIndicator
} from 'react-native';
import { COLORS, SIZES } from "../constants/theme";

interface AppButtonProps {
    title: string;
    onPress: () => void;
    disabled?: boolean;
    loading?: boolean;
    variant?: 'primary' | 'secondary';
}

const AppButton: React.FC<AppButtonProps> = ({
    title, onPress, disabled, loading, variant = 'primary'
}) => {
    return (
        <TouchableOpacity
            style={[
                styles.button,
                variant === 'secondary' && styles.secondaryButton, disabled && styles.disabled
            ]}
            onPress={onPress}
            disabled={disabled || loading}
        >
            {loading ? (
                <ActivityIndicator color={COLORS.white} />
            ) : (
                <Text style={[ 
                    styles.text,
                    variant === 'secondary' && styles.secondaryText
                 ]}>
                    {title}
                </Text>
            )}
        </TouchableOpacity>
    );
};

export default AppButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.primary,
        paddingVertical: 16,
        borderRadius: SIZES.radius,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    secondaryButton: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: COLORS.primary,
    },
    disabled: {
        backgroundColor: COLORS.textSecondary,
        opacity: 0.5,
    },
    text: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: 16,
    },
    secondaryText: {
        color: COLORS.primary,
    }
})