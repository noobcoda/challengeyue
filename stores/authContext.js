import { createContext, useState, useEffect } from "react";
import { netlifyIdentity } from "netlify-identity-widget";
//default values
const AuthContext = createContext({
    user: null,
    login: () => {},
    logout: () => {},
    authReady: false,
});

export const AuthContextProvider = ({ children }) => {

    const [user,setUser] = useState(null);

    //useEffect fires when first loaded
    useEffect(() => {
        //init netlify identity connection
        netlifyIdentity.init();
    }, [])

    const login = () => {
        netlifyIdentity.open();
    }

    const context = {
        user: user,
        login: login,
    }

    return (
        <AuthContext.Provider value={context}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContext;