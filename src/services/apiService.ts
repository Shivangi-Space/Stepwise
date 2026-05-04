import AsyncStorage from "@react-native-async-storage/async-storage";

const API_BASE_URL = "https://6634ceae9bb0dfa1f810fd8b.mockapi.io/api/v1";

export const apiService = {
    saveProgress: async (data: any) => {
        try {
            const response = await fetch(`${API_BASE_URL}/progress`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            return await response.json();
        } catch (e) {
            throw new Error("Failed to save progress");
        }
    },

    getProgress: async() => {
        try {
            const response = await fetch(`${API_BASE_URL}/progress/1`); 
            return await response.json();
        } catch (e) {
            throw new Error("Failed to get progress");
        }
    }
};