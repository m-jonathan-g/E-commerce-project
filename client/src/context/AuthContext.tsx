import  { createContext, ReactNode, useContext, useEffect, useState} from "react";

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    isAdmin: boolean;
}

interface AuthContextTypes {
    isLoggedIn: boolean;
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextTypes | undefined>(undefined)

export const AuthProvider = ({ children }: {children: ReactNode}) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
        const storedAuthState = localStorage.getItem('isLoggedIn')
        return storedAuthState === 'true'
    })
    const [user, setUser] = useState<User | null>(() =>{
        const storedUser = localStorage.getItem('user')
        return storedUser ? JSON.parse(storedUser) : null
    })

    useEffect(() => {
        localStorage.setItem('isLoggedIn', isLoggedIn.toString())
        if (user) {
            localStorage.setItem('user', JSON.stringify(user))
        } else {
            localStorage.removeItem('user')
        }
    }, [isLoggedIn, user])

    const login = (user:User) => {
        setIsLoggedIn(true)
        setUser(user)
    }

    const logout = () => {
        setIsLoggedIn(false)
        setUser(null)
    }

    return(
        <AuthContext.Provider value={{isLoggedIn,  user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within a AuthProvider')
    }
    return context;
}