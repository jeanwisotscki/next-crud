import React from "react";

type FormContextType = {
  isVisible: boolean;
  setIsVisible: (newValue: boolean) => void;
};

interface FormContextProviderProps {
  children: React.ReactNode;
}

const defaultValue = {
  isVisible: false,
  setIsVisible: () => {},
};

export const FormContext = React.createContext<FormContextType>(defaultValue);

export const FormContextProvider = ({ children }: FormContextProviderProps) => {
  const [isVisible, setIsVisible] = React.useState(defaultValue.isVisible);

  return (
    <FormContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </FormContext.Provider>
  );
};
