import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import login from '../images/login.png'

export default class Login extends Component {
    render() {
        return (
            <div className="container my-5">
                <section className="signin-session">
                    <div className="row mx-2">

                        <div className="col-md-6 signin-form mt-5 mb-2">
                            <img src={login} className="d-block w-75 mx-5 mt-5" alt="Login"/>
                            <NavLink to="/signup" className="d-block text-center mb-3">Create an Account</NavLink>

                        </div>
                        <div className="col-md-6 signin-form mt-5 mb-2">
                            <h2 className="text-center">Login form</h2>
                            <form className="mt-5">
                                <div className="mb-3">
                                    <label htmlFor="emal" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="emal" aria-describedby="emailHelp"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password"/>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-success btn-lg">Submit</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </section>
            </div>
        )
    }
}
