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
}

const FlowContext = createContext<FlowContextType | undefined>(undefined);

type Props = {
    children: ReactNode;
}

export const FlowProvider = ({ children }: Props) => {
    const [formData, setFormData] = useState<FormDataType>({
        step: 1,
        age: '',
        goal: '',
        preferences: [],
        extraDetails: '',
    });

    const updateFormData = (newdata: Partial<FormDataType>) => {
        setFormData(prev => ({ ...prev, ...newdata })); 
    };

    return (
        <FlowContext.Provider value={{ formData, updateFormData }}>
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