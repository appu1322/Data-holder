import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class ErrorPage extends Component {
    render() {
        return (
            <div className="Error-section">
                <div className="container">
                    <h2>404 not Found</h2>
                    <NavLink to="/">Go to Home</NavLink>
                </div>
            </div>
        )
    }
}
