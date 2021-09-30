import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import signupImg from '../images/form.png'

export default class Signup extends Component {

    constructor(){
        super();
        this.state = {name:"", email:"", phone:91 , work:"", password:"", cpassword:""};
        this.postData = this.postData.bind(this);
    }

    
    handleInput(e){
        let name = e.target.name;
        let value = e.target.value;

        this.setState({[name]: value});
    }

    async postData(e){
        e.preventDefault();
        const {name, email, phone, work, password, cpassword} = this.state;
            try {
                const res = await fetch('/register', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name, email, phone, work, password, cpassword
                    })
                })
                const data = await res.json();

                if(data.status === 422 && data.error === "Fill data properly!" ){
                    window.alert('Fill data properly!');
                }else if(data.status === 422 && data.error === "Email already exist!"){
                    window.alert('Email already exist!');
                }else if(data.status === 201){
                    window.alert('succesully registered');
                }else{
                    window.alert('failed to registered');
                }
                
            } catch (error) {
                console.log('failed to registered')
            }
    }

    render() {
        return (
            <div className="container py-5">
                <section className="signup-session">
                    <h2 className="text-center">Signup Form</h2>
                    <div className="row mx-2">

                        <div className="col-md-6 signup-form mt-5 mb-2">
                        <form method="POST">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                    </svg> Name
                                </label>
                                <input type="text" className="form-control" id="name" name="name" value={this.state.name} aria-describedby="emailHelp" autoComplete="off" onChange={this.handleInput.bind(this)}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                                </svg> Email address
                                </label>
                                <input type="email" className="form-control" id="email" name="email" value={this.state.email} aria-describedby="emailHelp" autoComplete="off" onChange={this.handleInput.bind(this)}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
                                    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                                    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                </svg> Phone Number
                                </label>
                                <input type="text" className="form-control" id="phone" name="phone" value={this.state.phone} aria-describedby="emailHelp" autoComplete="off" onChange={this.handleInput.bind(this)}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="profession" className="form-label">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bar-chart-steps" viewBox="0 0 16 16">
                                    <path d="M.5 0a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-1 0V.5A.5.5 0 0 1 .5 0zM2 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-1zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zm2 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-1zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1z"/>
                                </svg> Profession
                                </label>
                                <input type="text" className="form-control" id="profession" name="work" value={this.state.work} aria-describedby="emailHelp" autoComplete="off" onChange={this.handleInput.bind(this)}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                                </svg> Password
                                </label>
                                <input type="password" className="form-control" id="password" name="password" value={this.state.password} autoComplete="off" onChange={this.handleInput.bind(this)}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="confirm-password" className="form-label">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
                                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
                                </svg> Confire Password
                                </label>
                                <input type="password" className="form-control" id="confirm-password" name="cpassword" value={this.state.cpassword} autoComplete="off" onChange={this.handleInput.bind(this)}/>
                            </div>
                            <div className="text-center">
                                <input type="submit" className="form-submit btn btn-success" value="register" onClick={this.postData} />
                            </div>
                        </form>
                        </div>

                        <div className="col-md-6 mt-5">
                            <img src={signupImg} className="d-block w-75 m-5" alt="Signup"/>
                            <NavLink to="/login" className="d-block text-center">I have already signup</NavLink>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
