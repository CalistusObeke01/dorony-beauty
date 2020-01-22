import React from 'react'
import Loader from './../images/ajax-loader.gif'

function Loading() {
    return(
        <div className="loading-center">
            <img src={Loader} alt="loading" />
        </div>
    )
}

export default Loading