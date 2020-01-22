import React from 'react'

function Button({children}) {
    return(
        <button type="submit" className="btnStyle">
            {children}
        </button>
    )
}

export default Button