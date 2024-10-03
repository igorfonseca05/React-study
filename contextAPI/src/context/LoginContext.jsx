
import { useContext, useState } from "react";
import { createContext } from "react";

export const LoginContext = createContext()

export function LoginProvider({ children }) {

    const [value, setValue] = useState(false)

    return (
        <LoginContext.Provider value={{ value }} >
            {children}
        </LoginContext.Provider >
    )
}

export function useLoginContext() {
    const [value] = useContext(LoginContext)

    if (!value) return

    return value
}