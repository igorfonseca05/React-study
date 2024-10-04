import React, { useState } from 'react'
import './Button.css'

import { useContextModal } from '../../context/ModalContext'

function Button({ innerText }) {

    const { setOpenModal } = useContextModal()

    return (
        /* From Uiverse.io by thewizardofzen */
        <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
            {innerText}
            <div className="arrow-wrapper">
                <div className="arrow"></div>
            </div>
        </button>


    )
}

export default Button