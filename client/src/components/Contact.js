import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <>
            <section className="contact-section">
                <div className="container-fluid my-4">
                    <div className="row ">

                        <div className="col-md-3 mx-1 my-2 pt-2">
                            <div id="phone">
                                <div className="row">

                                    <div className="col-sm-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
                                            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                                            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                        </svg>
                                    </div>
                                    <div className="col-sm-8">
                                        <h5 className="d-inline"> Phone</h5>
                                        <p>+91 87234543</p>
                                    </div>

                                </div>
                                    
                                    
                                    
                            </div>
                        </div>
                        <div className="col-md-3 mx-1 my-2 pt-2">
                            <div id="email">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                                    </svg>
                                    <h5 className="d-inline"> Email</h5>
                                </span>
                                    <p>mac@google.com</p>
                            </div>
                        </div>
                        <div className="col-md-3 mx-1 my-2 pt-2">
                            <div id="address">
                                <span>

                                    <h5 className="d-inline"> Address</h5>
                                </span>
                                    <p>101, las vegas</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="container">
                    <div className="contact-form p-3">
                        <h2>Get in Touch</h2>
                        <form>
                            <div className="row d-flex justify-content-between my-3">
                                
                                <div className="col-md-4">
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="name" aria-describedby="emailHelp"/>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="mb-3">
                                        <label htmlFor="phone" className="form-label">Phone Number</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    </div>
                                </div>
                                
                            </div>

                            <div className="content my-3">
                                <label htmlFor="feedback" className="form-label">Feedback</label>
                                <textarea className="form-control" id="feedback" rows="4"></textarea>
                            </div>
                            
                            <button type="submit" className="btn btn-success btn-lg">Submit</button>
                        </form>
                    </div>
                </div>
            </section> 
            </>
        )
    }
}
