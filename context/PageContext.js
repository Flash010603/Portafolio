import { createContext, useState } from "react";

export const PageContext = createContext({});

export const CounterProvider = ({children}) => {

    const [counter, setCounter] = useState(0)
    
     return <PageContext.Provider value={{counter, setCounter}} >
            {children}
        </PageContext.Provider>
     
};