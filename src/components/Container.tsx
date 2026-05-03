import React from "react";
import {
    View,
    StyleSheet,
    StatusBar
} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import {
    COLORS, SIZES
} from "../constants/theme";

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <SafeAreaView style={styles.safe}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.container}>
                {children}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    container: {
        flex: 1,
        padding: SIZES.padding,
    }
});

export default Container;