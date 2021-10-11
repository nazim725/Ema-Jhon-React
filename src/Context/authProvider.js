import React, { createContext } from 'react';
import useFirebase from '../hooks/useFireBase';
export const AuthContext=createContext();

const AuthProvider = (props) => {
    const {children}=props;
    const allContext=useFirebase()
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;