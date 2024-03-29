import React, { Component } from "react";
// import ReactDOM from "react-dom";
import Jumbotron from "../components/Jumbotron";
import "./style.css";
import Button from "../components/Button";
// import Modal from "../components/Modal";
import Axios from "axios";
import logo from "../assets/images/logoT@2x.png";
import { Redirect } from 'react-router-dom';


class Rolodex extends Component {
    state = {
        show: false,
        emailLogIn: "",
        passwordLogIn: "",
        emailSignUp: "",
        passwordSignUp: "",
        redirectTo: null
    };

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    handleChange = (event) => {
        console.log(event.target.name)
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(event.target.value);
    }

    handleLogin = (event) => {
        // event.preventDefault();

        console.log(this.state.emailLogIn);
        console.log(this.state.passwordLogIn);

        Axios
            .post("/user/signin", {
                email: this.state.emailLogIn,
                password: this.state.passwordLogIn
            })
            .then(response => {
                console.log("login response: ")
                console.log(response)
                if (response.status === 200) {
                    this.props.updateUser({
                        loggedIn: true,
                        emailLogIn: response.data.email
                    })
                    this.setState({
                        show: false,
                        redirectTo: "/loggedin"
                    })
                    this.hideModal();
                }
            }).catch(error => {
                console.log("login error: ")
                console.log(error);
            })
        console.log("loginbtn")

    };

    handleSignup = (event) => {
        // event.preventDefault();

        console.log("signupbtn")

        Axios
            .post('/user/signup', {
                email: this.state.emailSignUp,
                password: this.state.passwordSignUp
            })
            .then(response => {
                console.log(response)
                if (response.status === 200) {
                    this.props.updateUser({
                        loggedIn: true,
                        emailSignUp: response.data.emailSignUp
                    })
                    // console.log('successful signup')
                    this.setState({
                        show: false
                    });
                } else {
                    console.log('Sign-up error');
                }
            }).catch(error => {
                console.log('Sign up server error: ')
                console.log(error);
            })
    };

    render() {
        if (this.state.redirectTo){
            return <Redirect to={{ pathname: this.state.redirectTo }}/>
        } else {
        return (
            <div className="container">
                <div className="jumbotron loading">
                    <div className="row mb-5 mt-5">
                        <img className="mt-5 mx-auto" src={logo}></img>
                    </div>
                    <div className="row">
                        <Button className="loginB btn btn-lg mx-auto mb-4" onClick={this.login} data-toggle="modal" data-target="#loginModal">LOGIN</Button>
                    </div>
                    <div className="row">
                        <Button className="signupB btn btn-lg mx-auto" onClick={this.signup} data-toggle="modal" data-target="#signupModal">SIGN UP</Button>
                    </div>
                </div>



                {/* Log in modal */}
                <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel"><span className="blue">LOG IN</span></h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div className="modal-body">

                                <div className="form-group">
                                    <label className="col-sm-2 control-label"
                                        htmlFor="inputEmail3">EMAIL</label>
                                    <div className="col-sm-10">
                                        <input type="email" className="form-control"
                                            id="emailLogIn" name="emailLogIn" placeholder="Email" onChange={this.handleChange} value={this.state.emailLogIn} />
                                    </div>

                                    <div className="form-group">
                                        <label className="col-sm-2 control-label"
                                            htmlFor="inputPassword3" >PASSWORD</label>
                                        <div className="col-sm-10">
                                            <input type="password" className="form-control"
                                                id="passwordLogIn" name="passwordLogIn" placeholder="Password" onChange={this.handleChange} value={this.state.passwordLogIn} />
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    {/* <button type="button" className="btn loginB" onClick={this.handleLogin}>LOG IN</button> */}

                                    <button type="button" data-dismiss="modal" className="btn loginB" onClick={() => this.handleLogin()}>LOG IN</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Sign up modal */}
                <div className="modal fade" id="signupModal" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel"><span className="green">SIGN UP</span></h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div className="modal-body">

                                <div className="form-group">
                                    <label className="col-sm-2 control-label"
                                        htmlFor="inputEmail3">EMAIL</label>
                                    <div className="col-sm-10">
                                        <input type="email" className="form-control"
                                            id="emailSignUp" name="emailSignUp" placeholder="Email" onChange={this.handleChange} value={this.state.emailSignUp} />
                                    </div>

                                    <div className="form-group">
                                        <label className="col-sm-2 control-label"
                                            htmlFor="inputPassword3" >PASSWORD</label>
                                        <div className="col-sm-10">
                                            <input type="password" className="form-control"
                                                id="passwordSignUp" name="passwordSignUp" placeholder="Password" onChange={this.handleChange} value={this.state.passwordSignUp} />
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" data-dismiss="modal" className="btn signupB" onClick={() => this.handleSignup()}>SIGN UP</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
        }
    }
}


export default Rolodex;
