import React, { useContext } from 'react';

const AppContext = React.createContext();

export function useApp() {
    return useContext(AppContext);
}



export function AppContextProvider({ children }) {



    const value = {
   
    }

    return (
        <>
            <AppContext.Provider value={value}>
                {children}
            </AppContext.Provider>
        </>
    )
}




