import React from 'react'
import SEO from '../components/SEO'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BackButton from '../components/BackButton'

function PageNotFound() {
    return (
        <div className="text-center my-5">
            <SEO title="404: Not found" />
            <h1>Page not found </h1>
            <BackButton>
                <FontAwesomeIcon id="back-btn" icon={['fas', 'arrow-left']} />
            </BackButton>
        </div>
    )
}

export default PageNotFound