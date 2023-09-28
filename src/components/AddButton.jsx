import React from "react";

function Button({ text, itsClickButton, manejarClick }) {
    return(
        <button
        className={itsClickButton ? 'add-click' : 'reset-click'}
        onClick={manejarClick}>
            {text}
        </button>
    )
}

export default Button