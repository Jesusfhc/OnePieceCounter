import React from "react";
import '../style-sheets/Button.css'

function Button({ text, itsClickButton, manejarClick }) {
    return(
        <button
        className={itsClickButton ? 'add-Button' : 'reset-Button'}
        onClick={manejarClick}>
            {text}
        </button>
    )
}

export default Button