import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SubscribeForm() {
    const [email, setEmail] = useState('')

    const handleSumbit = (event) => {
        event.preventDefault()
        alert(email)
    }

    return (
        <>
            <form onSubmit={handleSumbit}>
                <input 
                    type="email" 
                    value={email} 
                    placeholder="Email address"
                    onChange={ event => {
                        setEmail(event.target.value)
                    }} 
                    required
                />
                <span style={{color: '#ffc107', marginLeft: '-18px'}}>
                    <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                </span><br/>
                <span style={{fontSize: '12px', color: '#808080'}}>
                    <i>Get beauty updates in your mailbox</i>
                </span>   
            </form>
        </>
    )

}

export default SubscribeForm