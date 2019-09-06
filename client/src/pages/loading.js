import React, { Component } from "react";
// import ReactDOM from "react-dom";
import Jumbotron from "../components/Jumbotron";
import "./style.css";
import Button from "../components/Button";
// import Modal from "../components/Modal";
import Axios from "axios";
import logo from "../assets/images/logoT@2x.png";


class Rolodex extends Component {
    state = {
        show: false,
        emailLogIn: "",
        passwordLogIn: "",
        emailSignUp: "",
        passwordSignUp: ""
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

        Axios
            .post("/user/login", {
                emailLogIn: this.state.email,
                passwordLogIn: this.state.password
            })
            .then(response => {
                console.log("login response: ")
                console.log(response)
                if (response.status === 200) {
                    this.props.updateUser({
                        loggedIn: true,
                        emailLogIn: response.data.emailLogIn
                    })
                    this.setState({
                        redirectTo: "/"
                    })
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
                emailSignUp: this.state.email,
                passwordSignUp: this.state.password
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
                        redirectTo: '/'
                    })
                } else {
                    console.log('Sign-up error');
                }
            }).catch(error => {
                console.log('Sign up server error: ')
                console.log(error);
            })
    };

    render() {
        return (
            <div className="container">
                <div className="row mb-5">
                    {/* <div className="col-md-3"></div> */}
                    <div className="col-md-12">
                        <img className="mt-5" src={logo}></img>
                    </div>
                    {/* <div className="col-md-3"></div> */}
                </div>
                <div className="row">
                    <div className="col-md-12 mb-5">
                        <Button className="loginB btn btn-lg" onClick={this.login} data-toggle="modal" data-target="#loginModal">LOGIN</Button>
                    </div>
                    <div className="row">
                    <div className="col-md-12">
                        <Button className="signupB btn btn-lg" onClick={this.signup} data-toggle="modal" data-target="#signupModal">SIGN UP</Button>
                    </div>
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
                                <button type="button" className="btn loginB" onClick={() => this.handleLogin()}>LOG IN</button>
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
                                <button type="button" className="btn signupB" onClick={() => this.handleSignup()}>SIGN UP</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Rolodex;
