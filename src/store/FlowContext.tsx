import React, {
    createContext,
    useState,
    useContext,
    ReactNode,
} from 'react';

type FormDataType = {
    step: number;
    age: string;
    goal: string;
    preferences: string[];
    extraDetails: string;
};

type FlowContextType = {
    formData: FormDataType;
    updateFormData: (data: Partial<FormDataType>) => void;
    resetForm: () => void;
}

const FlowContext = createContext<FlowContextType | undefined>(undefined);

type Props = {
    children: ReactNode;
}

export const FlowProvider = ({ children }: Props) => {
    const initialState = {
        step: 1,
        age: '',
        goal: '',
        preferences: [],
        extraDetails: '',
    };

    const [formData, setFormData] = useState<FormDataType>(initialState);
    
    const updateFormData = (newdata: Partial<FormDataType>) => {
        setFormData(prev => ({ ...prev, ...newdata })); 
    };

    const resetForm = () => {
        setFormData(initialState);
    };

    return (
        <FlowContext.Provider value={{ formData, updateFormData, resetForm }}>
            {children}
        </FlowContext.Provider>
    );
};

export const useFlow = () => {
    const context = useContext(FlowContext);
    if(!context) {
        throw new Error('useFlow must be used within FlowProvider');
    }
    return context;
}