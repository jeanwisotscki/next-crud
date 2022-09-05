import React, { Dispatch, SetStateAction } from "react";

interface FormContext {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

export const FormContext = React.createContext<any>({});

export const FormContextProvider = (props) => {
  const [isVisible, setIsVisible] = React.useState(true);

  return (
    <FormContext.Provider value={{ isVisible, setIsVisible }}>
      {props.children}
    </FormContext.Provider>
  );
};
