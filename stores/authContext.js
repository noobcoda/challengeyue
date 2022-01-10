import { createContext, useState, useEffect } from "react";
import NetlifyIdentityWidget from "netlify-identity-widget";
//default values
const AuthContext = createContext({
    user: null,
    login: () => {},
    logout: () => {},
    authReady: false,
});

export const AuthContextProvider = ({ children }) => {

    const [user,setUser] = useState(null);
    const [authReady,setAuthReady] = useState(false);

    //useEffect fires when first loaded
    useEffect(() => {
        NetlifyIdentityWidget.on('login',(user)=>{
            setUser(user);
            NetlifyIdentityWidget.close();
            console.log("Login event");
        })

        NetlifyIdentityWidget.on('logout',()=>{
            setUser(null);
            console.log("Logout event");
        })

        NetlifyIdentityWidget.on('widget',()=>{
            setUser(user);
            setAuthReady(true);
            console.log("Init event");
        })

        NetlifyIdentityWidget.init();

        //unregistering these event listeners, so we don't have duplicate ones
        //for good practise
        //if we return a function in useEffect, occurs when unmounting
        return () => {
            NetlifyIdentityWidget.off("login");
            NetlifyIdentityWidget.off("logout");
        }

    }, [])


    const login = () => {
        NetlifyIdentityWidget.open();
    }

    const logout = () => {
        NetlifyIdentityWidget.logout();
    }

    const context = {
        user: user,
        login: login,
        logout: logout,
        authReady: authReady,
    }

    return (
        <AuthContext.Provider value={context}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContext;