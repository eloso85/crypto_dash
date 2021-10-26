import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { Switch, Route, Link } from 'react-router-dom'
//components
import { Navbar } from './components'

const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">

            </div>
            <div className="footer">

            </div>
        </div>
    )
}

export default App
