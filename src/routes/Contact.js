import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SEO from '../components/SEO'
import Button from '../components/Button'
import '../App.css';

function Contact() {
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [msg, setMsg] = useState('')

    return(
        <div className="container">
            <SEO title="Contact - Dorony Beauty & Skincare" 
            name="Contact" 
            content ={`Dorony beauty & skincare is a call or message away, you can
            always reach us to place order or book an appointment.`}/>
            <div className="row">
                <div style={{display: 'flex', justifyContent: 'center', boxShadow: '0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19)', margin: '100px 0'}}>
                    <div>
                        <div className="col-md-12">
                            <p className="text-center mt-4 text-uppercase"><b>Please provide these information</b></p>
                            <form onSubmit={(event) => {event.preventDefault(); alert(name)}} >
                                <input 
                                type="text"
                                value={name}
                                placeholder="Name"
                                className="col-md-10 field"
                                onChange={((event) => {
                                    setName(event.target.value)
                                })} />

                                <input 
                                type="text"
                                value={phoneNumber}
                                placeholder="Phone Number"
                                className="col-md-10 field"
                                onChange={((event) => {
                                    setPhoneNumber(event.target.value)
                                })} />

                                <input 
                                type="text"
                                value={email}
                                placeholder="Email Address"
                                className="col-md-10 field"
                                onChange={((event) => {
                                    setEmail(event.target.value)
                                })} />

                                <input 
                                style={{lineHeight: '90px'}}
                                type="textarea" 
                                value={msg}
                                height="60"
                                placeholder="How can we help you please ?"
                                className="col-md-10 field"
                                onChange={((event) => {
                                    setMsg(event.target.value)
                                })}
                                />

                                <br/>
                                <Button>
                                    <FontAwesomeIcon icon={['fas', 'paper-plane']}  style={{border: 'none'}} />
                                    &nbsp;Send
                                </Button>
                                <div className="mb-5"></div>
                            </form>
                        </div>
                    </div>
                    <div style={{background: '#000'}}>
                        <div className="col-md-12 text-white my-4">
                            <p className="mb-5" style={{letterSpacing: '1px'}}><b>You can always come around and get our products
                            at affordable rate</b></p>
                            <div >
                                <FontAwesomeIcon icon={['fas', 'map-marker']} /> 
                                <p style={{display: 'inline-block', marginLeft: '15px', marginBottom: '20px'}}>59B, Lagos crescent crystal estate, amuwo odofin</p>
                            </div>

                            <div>
                                <FontAwesomeIcon icon={['fas', 'phone']} />
                                <p style={{display: 'inline-block', marginLeft: '15px', marginBottom: '20px'}}>+234 703 195 9184</p>
                            </div>

                            <div>
                                <FontAwesomeIcon icon={'envelope'} />
                                <p style={{display: 'inline-block', marginLeft: '15px', marginBottom: '20px'}}>info@doronybeauty.com</p>
                            </div>

                            <div style={{marginTop: '50px'}}>
                                <p>
                                    <a 
                                        href="https://www.facebook.com/Doronybeauty" 
                                        aria-label="Dorony beauty & skincare facebook page" 
                                        rel='noopener noreferrer'
                                        target="_blank">
                                        <span
                                            style={{padding: '3px 7px', border: '0.06em solid #808080',
                                            borderRadius: '3px', color: '#808080'}}>
                                            <FontAwesomeIcon icon={['fab', 'facebook-f']} /></span>
                                    </a> &nbsp;
                                    <a 
                                        href="https://www.instagram.com/Doronybeauty"
                                        aria-label="Dorony beauty & skincare instagram page" 
                                        rel='noopener noreferrer'
                                        target="_blank">
                                        <span
                                            style={{padding: '3px 7px', border: '0.06em solid #808080',
                                            borderRadius: '3px', color: '#808080'}}>
                                            <FontAwesomeIcon icon={['fab', 'instagram']} />
                                        </span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact