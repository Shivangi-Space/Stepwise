# StepWise - Multi-Step Guided Flow App

A professional React Native application built with Expo, featuring a dynamic multi-step form, state persistence, and backend integration.

## 🚀 Features
- **Dynamic Multi-step Flow:** 5-step guided process.
- **Conditional Logic:** Shows specific steps based on user goals (e.g., Weight Loss details).
- **Progress Tracking:** Visual progress bar and step indicators.
- **Data Persistence:** Uses AsyncStorage to resume where the user left off.
- **Backend Integration:** Connects to MockAPI for saving and retrieving progress.
- **TypeScript:** Fully typed for better developer experience and reliability.

## 🛠️ Tech Stack
- **Framework:** React Native (Expo)
- **Language:** TypeScript
- **State Management:** Context API
- **Navigation:** React Navigation (Stack)
- **Icons:** Lucide-React-Native
- **Storage:** @react-native-async-storage/async-storage

## 📂 Folder Structure
- `src/components`: Reusable UI elements (Buttons, Inputs, ProgressBar).
- `src/screens`: Individual step screens and Summary.
- `src/store`: Global state management using Context API.
- `src/services`: API service for backend communication.
- `src/hooks`: Custom hooks for storage and logic.
- `src/constants`: Theme and global styling constants.

## ⚙️ Setup & Installation
1. Clone the repo: `https://github.com/Shivangi-Space/Stepwise.git`
2. Install dependencies: `npm install`
3. Start the app: `npx expo start`