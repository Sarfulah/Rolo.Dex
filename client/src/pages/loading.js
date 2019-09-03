import React, { Component } from "react";
import ReactDOM from "react-dom";
import Jumbotron from "../components/Jumbotron";
import "./style.css";
import Button from "../components/Button";
import Modal from "../components/Modal";

class Rolodex extends Component {
    state = { show: false };

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };
    login = () => {
        console.log("loginbtn")
        this.showModal();
    }

    signup = () => {
        console.log("signupbtn")
    }

    render() {
        return (
            <div>

                <Jumbotron className="jumbotron jumbotron-fluid">
                    <h1>Logo</h1>
                </Jumbotron>

                <Button onClick={this.login} data-toggle="modal" data-target="#loginModal">Login</Button>
                <Button onClick={this.signup} data-toggle="modal" data-target="#signupModal">Sign Up</Button>

                <Modal modalName="loginModal" title="Login Modal" submitBtn="Login"/>
                <Modal modalName="signupModal" title="Signup Modal" submitBtn="Sign Up"/>
            </div>
        );
    }
}

export default Rolodex;
