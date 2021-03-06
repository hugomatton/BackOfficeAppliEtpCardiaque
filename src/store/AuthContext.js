import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
    token: '',
    isAuthenticated: false,
    authenticate: () => {},
    logout: () => {}
})

function AuthContextProvider({children}){

    const [authToken, setAuthToken] = useState()

    function authenticate(token){
        setAuthToken(token)
        localStorage.setItem('token', token)
    }

    function logout(){
        setAuthToken(null)
        localStorage.removeItem('token')
    }

    useEffect(()=>{
        if(localStorage.getItem('token') !== null){
            authenticate(localStorage.getItem('token'))
        }
    },[])

    const value = {
        token: authToken,
        isAuthenticated: !! authToken,
        authenticate: authenticate,
        logout: logout
    }

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider