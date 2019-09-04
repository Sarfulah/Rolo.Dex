import React, { Component } from "react";
// import ReactDOM from "react-dom";
import Jumbotron from "../components/Jumbotron";
import "./style.css";
import Button from "../components/Button";
// import Modal from "../components/Modal";
import Axios from "axios";

class Rolodex extends Component {
    state = { 
        show: false,
        usernameLogIn: "",
        passwordLogIn: "",
        usernameSignUp: "",
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
        event.preventDefault();

        Axios
            .post("/user/login", {
                usernameLogIn: this.state.username,
                passwordLogIn: this.state.password
            })
            .then(response => {
                console.log("login response: ")
                console.log(response)
                if(response.status === 200) {
                    this.props.updateUser({
                        loggedIn: true,
                        usernameLogIn: response.data.usernameLogIn
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
        event.preventDefault();
        
        console.log("signupbtn")

        Axios
            .post('/user/signup', {
                usernameSignUp: this.state.username,
                passwordSignUp: this.state.password
        })
            .then(response => {
                console.log(response)
                if (response.status === 200) {
                    this.props.updateUser({
                        loggedIn: true,
                        usernameSignUp: response.data.usernameSignUp
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
            <div>

                <Jumbotron className="jumbotron jumbotron-fluid">
                    <h1>Logo</h1>
                </Jumbotron>

                <Button onClick={this.login} data-toggle="modal" data-target="#loginModal">Login</Button>
                <Button onClick={this.signup} data-toggle="modal" data-target="#signupModal">Sign Up</Button>


                {/* Log in modal */}
                <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Log In</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div className="modal-body">

                                <div className="form-group">
                                    <label className="col-sm-2 control-label"
                                        htmlFor="inputEmail3">Email</label>
                                    <div className="col-sm-10">
                                        <input type="email" className="form-control"
                                            id="usernameLogIn" name="usernameLogIn" placeholder="Email" onChange={this.handleChange} value={this.state.usernameLogIn}/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-sm-2 control-label"
                                        htmlFor="inputPassword3" >Password</label>
                                    <div className="col-sm-10">
                                        <input type="password" className="form-control"
                                            id="passwordLogIn" name="passwordLogIn" placeholder="Password" onChange={this.handleChange} value={this.state.passwordLogIn}/>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={() => this.handleLogin()}>Log In</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sign up modal */}
                <div className="modal fade" id="signupModal" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Sign Up</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div className="modal-body">

                                <div className="form-group">
                                    <label className="col-sm-2 control-label"
                                        htmlFor="inputEmail3">Email</label>
                                    <div className="col-sm-10">
                                        <input type="email" className="form-control"
                                            id="usernameSignUp" name="usernameSignUp" placeholder="Email" onChange={this.handleChange} value={this.state.usernameSignUp}/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-sm-2 control-label"
                                        htmlFor="inputPassword3" >Password</label>
                                    <div className="col-sm-10">
                                        <input type="password" className="form-control"
                                            id="passwordSignUp" name="passwordSignUp" placeholder="Password" onChange={this.handleChange} value={this.state.passwordSignUp}/>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={() => this.handleSignup()}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Rolodex;
