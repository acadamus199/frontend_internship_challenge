import { ReactNode, createContext, useState } from "react";
import { TabNames } from "./navigation/tabs/TabNames";

interface MyContextType {
    globalVariable: string,
    setGlobalVariable: React.Dispatch<React.SetStateAction<string>>;
  }
  
  export const MyContext = createContext<MyContextType | any>(undefined);
  
  export const MyProvider: React.FC<{children : ReactNode}> = ({children}) => {
    const [globalVariable, setGlobalVariable] = useState<string>(TabNames.tab1);
  
    return(
      <MyContext.Provider value={{globalVariable, setGlobalVariable}}>
        {children}
      </MyContext.Provider>
    )
  }