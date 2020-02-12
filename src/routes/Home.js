import React from 'react';
import '../App.css';
import SEO from '../components/SEO'
import Services from '../components/Services'
import Testimonial from '../components/Testimonial'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas, faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

library.add(fas, fab, faEnvelope, faKey);


class Home extends React.Component {
  render() {
    return(
      <>
        <div className="container main">

          <SEO title="Home - Dorony Beauty & Skincare" 
            name="Official homepage of doronybeauty & skincare" 
            content ={`Dorony beauty & skinincare is all about beutification.
              We beautify your face and skin leaving it spotless and flawless.`}/>
          <div className="site-name">
            <div className="dorony">
              <span className="D">D</span>
              <span className="O1">O</span>
              <span className="R">R</span>
              <span className="O2">O</span>
              <span className="N">N</span>
              <span className="Y">Y</span>
            </div>
            <div className="beauty-skincare">
              <span>B</span>
              <span>E</span>
              <span>A</span>
              <span>U</span>
              <span>T</span>
              <span style={{paddingRight: '.4rem'}}>Y</span>
              <span>&</span>
              <span style={{paddingLeft: '.4rem'}}>S</span>
              <span>K</span>
              <span>I</span>
              <span>N</span>
              <span>C</span>
              <span>A</span>
              <span>R</span>
              <span>E</span>
            </div>
          </div>
          <div className="circle-top-right"></div>
          <div className="circle-bottom-left"></div>
          <p className="text-content">
            <b>Dorony beauty & skinincare</b> is all about beutification.<br className="hide-on-mobile" />
            We beautify your face and skin leaving it <br className="hide-on-mobile" />
            <i>spotless and flawless.</i>
          </p>
          <div className="purple-cicle"></div>
          <div className="lemon-circle"></div>
          <div className="home-image"></div>
        </div>

        <Services />
        <Testimonial />
      </>
    )
  }
}

export default Home
