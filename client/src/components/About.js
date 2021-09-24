import React, { Component } from 'react'
import user from '../images/user.png'

export default class About extends Component {
    render() {
        return (
            <section className="about-section">
                <div className="container my-5 p-5">
                    <div className="row d-flex justify-content-around">

                        <div className="col-md-3 ">
                            <div className="profile-pic text-center my-2">
                                <img src={user} className="w-50" alt="" srcSet=""/>

                            </div>
                            <div className="info text-center">
                                <h5>My Name</h5>
                                <p>Web Developer</p>
                            </div>
                            <div className="edit-pic text-center">
                                <button className="btn btn-light">Edit Photo</button>
                            </div>
                        </div>
                        <div className="col-md-9 ml-3 mt-3">

                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
                                </li>
                            </ul>

                            {/* here toggle the nav-tab  */}
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    
                                    <div className="row my-4">
                                        <div className="col-md-6">
                                            <label >User_id</label>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="text-info">387432</label>
                                        </div>
                                    </div>
                                    <div className="row my-4">
                                        <div className="col-md-6">
                                            <label htmlFor="">Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="text-info">mac</label>
                                        </div>
                                    </div>
                                    <div className="row my-4">
                                        <div className="col-md-6">
                                            <label htmlFor="">Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="text-info">mac@oogle.com</label>
                                        </div>
                                    </div>
                                    <div className="row my-4">
                                        <div className="col-md-6">
                                            <label htmlFor="">Phone</label>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="text-info">3546456564</label>
                                        </div>
                                    </div>
                                    <div className="row my-4">
                                        <div className="col-md-6">
                                            <label htmlFor="">Profession</label>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="text-info">web dev</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    
                                    <div className="row my-4">
                                        <div className="col-md-6">
                                            <label htmlFor="">Profession</label>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="">web dev</label>
                                        </div>
                                    </div>
                                    <div className="row my-4">
                                        <div className="col-md-6">
                                            <label htmlFor="">Profession</label>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="">web dev</label>
                                        </div>
                                    </div>
                                    <div className="row my-4">
                                        <div className="col-md-6">
                                            <label htmlFor="">Profession</label>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="">web dev</label>
                                        </div>
                                    </div>
                                    <div className="row my-4">
                                        <div className="col-md-6">
                                            <label htmlFor="">Profession</label>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="">web dev</label>
                                        </div>
                                    </div>
                                    <div className="row my-4">
                                        <div className="col-md-6">
                                            <label htmlFor="">Profession</label>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="">web dev</label>
                                        </div>
                                    </div>
                                 
                                </div>
                            </div>
                        </div>            
                    </div>
                </div>
            </section>
        )
    }
}
