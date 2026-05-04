import AsyncStorage from "@react-native-async-storage/async-storage";

const API_BASE_URL = "https://69f80a73dd0c226688ee1ced.mockapi.io";

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
            if(!response.ok) throw new Error("Server error while saving progress");
            return await response.json();
        } catch (e) {
            console.error("API Save Error:", e);
            throw e;
        }
    },

    getProgress: async() => {
        try {
            const response = await fetch(`${API_BASE_URL}/progress`); 
            if (!response.ok) throw new Error("Server error while fetching");
            const data = await response.json();
            
            if (data.length > 0) {
                return data[data.length - 1]; 
            }
            return null;
        } catch (e) {
            console.error("API Get Error:", e);
            throw e;
        }
    }
};