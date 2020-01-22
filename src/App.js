import React, {Suspense, lazy} from 'react'
import { Route, Switch } from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import Loading from  './components/Loading'

const Home = lazy(() => import('./routes/Home'))
const Product = lazy(() => import('./routes/Products'))
const Contact = lazy(() => import('./routes/Contact'))
const PageNotFound = lazy(() => import('./routes/PageNotFound'))

function App() {
  return(
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Product} />
          <Route path="/contact" component={Contact} />
          <Route path="*" component={PageNotFound} /> 
        </Switch>
      </Suspense>
      <Footer />
    </>
  )
}

export default App