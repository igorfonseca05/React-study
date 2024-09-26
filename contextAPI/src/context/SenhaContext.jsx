import { createContext, useState, useContext } from "react";


export const SenhaContext = createContext()

export function SenhaContextProvider({ children }) {

    const [senha, setSenha] = useState('Meu nome é gal')

    return (
        <SenhaContext.Provider value={{ senha }}>
            {children}
        </SenhaContext.Provider>
    )
}


export function useSenhaContext() {
    const { senha } = useContext(SenhaContext)
    return senha
}