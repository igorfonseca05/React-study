
import { createContext, useContext, useState } from "react";

export const ModalContex = createContext()

export function ModalContexProvider({ children }) {

    const [openModal, setOpenModal] = useState(false)

    return (
        <ModalContex.Provider value={{ openModal, setOpenModal }}>
            {children}
        </ModalContex.Provider>
    )
}

export function useContextModal() {
    const { openModal, setOpenModal } = useContext(ModalContex)

    return { openModal, setOpenModal }
}