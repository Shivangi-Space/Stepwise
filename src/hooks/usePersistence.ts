import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@stepwise_progress";

export const usePersistence = () => {
    const saveProgress = async(data: any) => {
        try {
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        } catch (e) {
            console.error("Error saving progress", e);
        }
    };

    const loadProgress = async() => {
        try {
            const data = await AsyncStorage.getItem(STORAGE_KEY);
            return data ? JSON.parse(data) : null;
        } catch (e) {
            console.error("Error loading progress", e);
            return null;
        }
    };

    const clearProgress = async() => {
        try{
            await AsyncStorage.removeItem(STORAGE_KEY);
        } catch(e) {
            console.error("Error clearing progress", e);
        }
    };

    return {saveProgress, loadProgress, clearProgress};
};