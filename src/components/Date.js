import React, { useState, useEffect } from "react";
function CurrentYear() {
    const [year, setYear] = useState(null)

    useEffect(() => {
        setYear( currentYear() )
    }, [])

    const currentYear = () => {
        const date = new Date()
        return date.getFullYear()
    }

    return (
        <>
            © &nbsp; { year } Dorony Beauty & Skincare. All Rights Reserved
        </>
    )
}

export default CurrentYear