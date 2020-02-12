import React, { Component } from 'react'
import Title from './Title'
import Img from './../images/PhotoGrid_1503052805965.jpg'

class Testimonial extends Component {
    state = {
        testimonies: [
            {
                id: 1,
                desc: `The products i bought from your store are 
                working perfectly on my skin. Am making my next order soon`,
                name: 'Dami Client'
            },
            {
                id: 2,
                desc: `The body milk i bought from you is nice,
                the soap inclusive. Both are working perfectly on my skin.`,
                name: 'Flawless Set'
            },
            {
                id: 3,
                desc: `At the event, i stole the show, people around was asking me 
                where i did my makeup.`,
                name: 'Dami Client'
            }
        ]
    }
    render() {
        return(
            <section id="testimonial">
                <Title title="Testimonials" />
                <div className="container" style={{marginBottom: '7rem'}}>
                    <div className="row">
                        {
                            this.state.testimonies.map(testimony => {
                                return (
                                    <div key={testimony.id} className="col-md-4 testimonial-display">
                                        <p style={{marginTop: '40px', textAlign: 'center'}}><b>{testimony.name}</b></p>
                                        <p style={{textAlign: 'center'}}>{testimony.desc}</p>
                                        <img src={Img} alt={testimony.name} 
                                        width="60px" height="60px" 
                                        style={{position: 'absolute', top: '-20px', left: '44%'}} 
                                        className="rounded-circle" />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default Testimonial