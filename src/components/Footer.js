import React from "react";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CurrentYear from './Date'
import SubscribeForm from './SubscribeForm'
import '../App.css';

function Footer() {

    return (
        <footer id="sticty-footer" className="py-4 bg-dark text-white" style={{position: 'relative'}}>
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-4">
                        <span className="circle-icon">
                            <FontAwesomeIcon icon={['fas', 'phone']} />
                        </span><br />
                        <small>+234 703 195 9184</small>
                    </div>
                    <div className="col-md-4">
                        <span className="circle-icon">
                            <FontAwesomeIcon icon={'envelope'} />
                        </span><br />
                        <small>info@doronybeauty.com</small>
                    </div>
                    <div className="col-md-4">
                        <span className="circle-icon">
                            <FontAwesomeIcon icon={['fas', 'map-marker']} />
                        </span><br />
                        <small>59B, Lagos crescent crystal estate, amuwo odofin</small>
                    </div>
                </div>
                <hr className="hr-design" />
            </div>
            <div className="container site-footer-details" style={{marginBottom: '100px', marginTop: '-20px'}}>
                <div className="row">
                    <div className="col-md-4">
                        <p >About</p>
                        <ul>
                            <li>
                                <Link to='#our-story'>
                                    Our Story
                                </Link>
                            </li>
                            <li>
                                <Link to='#classes'>
                                    Classes
                                </Link>
                            </li>
                            <li>
                                <Link to='/products'>
                                   Products
                                </Link>
                            </li>
                            <li>
                                <Link to="#faq">
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <p className="heading">Company</p>
                        <ul>
                            <li>
                                <Link to='/'>
                                   Home
                                </Link>
                            </li>
                            <li>
                                <a href="/#services">
                                    Our Services
                                </a>
                            </li>
                            <li>
                                <Link to='/contact'>
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <a href='/#testimonial'>
                                    Testimonial
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <p className="heading">Subscribe</p>
                        <SubscribeForm />
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p style={{marginBottom: '0'}}>
                    <a 
                        href="https://www.facebook.com/Doronybeauty" 
                        aria-label="Dorony beauty & skincare facebook page" 
                        rel='noopener noreferrer'
                        target="_blank">
                        <span
                            style={{padding: '3px 7px', border: '0.06em solid rgba(0,0,0,0.2)',
                            borderRadius: '50%', color: '#808080'}}>
                            <FontAwesomeIcon icon={['fab', 'facebook-f']} /></span>
                    </a> &nbsp;
                    <a 
                        href="https://www.instagram.com/Doronybeauty"
                        aria-label="Dorony beauty & skincare instagram page" 
                        rel='noopener noreferrer'
                        target="_blank">
                        <span
                            style={{padding: '3px 7px', border: '0.06em solid rgba(0,0,0,0.2)',
                            borderRadius: '50%', color: '#808080'}}>
                            <FontAwesomeIcon icon={['fab', 'instagram']} />
                        </span>
                    </a>
                </p>
                <small style={{color: '#808080'}}><CurrentYear/></small>
            </div>
        </footer>
    ) 
}

export default Footer;