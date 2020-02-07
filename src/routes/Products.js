import React from 'react'
import SEO from '../components/SEO'
import '../App.css';
import items from '../data'

function Products () {

    const numberFormat = (value) => new Intl.NumberFormat('NGN', {
        currency: 'NGN'
    }).format(value)

    return(
        <div className="container my-5">
            <SEO title="Products - Dorony Beauty & Skincare" 
            name="Products" 
            content ={`Our products are very effective as described. A trial will
            surely convince you`}/>
            <div className="row">
                {
                    items.map(detail => {
                        return<div className="col-md-4 col-lg-3" key={detail.id} style={{position: 'relative'}}>
                            <img className="img-thumbnail" src={detail.imgUrl} alt={detail.product} width="300px" height="180px" />
                            <p className="text-center"><b>{detail.product}</b></p>
                            <p id="price-top" 
                            style={{position: 'absolute',
                            top: '0', 
                            left: '20px', 
                            background: 'rgba(0,0,0,0.8)',
                            color: '#fff',
                            padding: '6px',
                            borderBottomRightRadius: '1rem',
                            letterSpacing: '2px'}}>
                                &#8358;{numberFormat(detail.price)}
                            </p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Products