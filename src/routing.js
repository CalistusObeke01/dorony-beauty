import React from 'react'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import App from './App'
import Header from './header/Header'
import Footer from './footer/Footer'
import Product from './product/Product'
import Contact  from './contact/Contact'
import PageNotFound from './error/PageNotFound'

function Routing() {
    return(
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/products" component={Product} />
                <Route path="/contact" component={Contact} />
                <Route path="*" component={PageNotFound} /> 
            </Switch>
            <Footer />
        </Router>
    )
}

export default Routing