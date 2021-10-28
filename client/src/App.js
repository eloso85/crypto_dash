import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { Switch, Route, Link } from 'react-router-dom'
//components
import { Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails } from './components'

const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <div className="routes">
                    <Switch>
                        <Route exact path="/">
                            <Homepage />
                        </Route>
                        <Route exact path="/exchanges">
                            <Exchanges />
                        </Route> <Route exact path="/cryptocurrencies">
                            <Cryptocurrencies />
                        </Route> <Route exact path="/crypto/:coinId">
                            <CryptoDetails />
                        </Route> <Route exact path="/news">
                            <News />
                        </Route>
                    </Switch>
                </div>
            </div>
            <div className="footer">

            </div>
        </div>
    )
}

export default App
