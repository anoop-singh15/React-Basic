import { createContext, useContext, useState} from 'react'


const AuthContext=createContext(null);

export const AuthProvider=({children})=>{
    const [user,setUser]=useState(null);

    const login=(user)=>{
        setUser(user);
    }

    const logout=()=>{
        setUser(null);
    }
    return <AuthContext.Provider value={{user,login,logout}}>
        {children}
    </AuthContext.Provider>
}


// Custom hook so that we do not have to write useContext(AuthContext)

export const useAuth=()=>{
    return useContext(AuthContext);
}