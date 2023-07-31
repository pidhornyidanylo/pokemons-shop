import { createContext, useState, useEffect } from "react";

import { 
    onAuthStateChangedListener, 
    createUserDocumentFromAuth 
} from "../utils/firebase.utils";

export const UserContext = createContext({
    setUser: () => {},
    user: null 
})

export const UserProvider = ({ children }) => {
    const [ user, setUser ] = useState(null);
    const value = { user, setUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener(user => {
            if(user) {
                createUserDocumentFromAuth(user);
            }
            setUser(user);
        })
        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}
