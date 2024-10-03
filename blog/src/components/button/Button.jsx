import React from 'react'
import './Button.css'

function Button({ innerText }) {
    return (
        /* From Uiverse.io by thewizardofzen */
        <button>
            {innerText}
            <div class="arrow-wrapper">
                <div class="arrow"></div>
            </div>
        </button>


    )
}

export default Button