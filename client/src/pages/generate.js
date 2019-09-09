import React, { Component } from "react";
// import ReactDOM from "react-dom";
import "./style.css";
import Form from "../components/Form";
<<<<<<< HEAD
import Axios from "axios";
import API from "../utils/API";
import { Redirect } from 'react-router-dom';
=======
import Nav from "../components/Nav";
import QRCodeButton from "../components/QRCodeButton";
import API from '../utils/API';
// import Button from "../components/Button"
import QRCode from 'qrcode.react';
import "./style.css";
>>>>>>> 3c3e44bf36f530fadd8c217498d60b6a846e04b9

class Generate extends Component {
    state = {
        qrCode: "",
        qrShowHide: "hide",
        firstName: "",
        lastName: "",
        mobileNum: "",
        emailAdd: "",
        companyName: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        website: "",
    };

    componentDidMount() {
        this.setState({ qrCode: "" })
    }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log({ [name]: value })
    };

    //   handleOnClick = event => {
    //     console.log("I clicked saved")

    //   }
    handleFormSubmit = event => {

        const { firstName, lastName, mobileNum, emailAdd, companyName, address, city, state, zip, website } = this.state;
        event.preventDefault();
        // console.log ("submit")
        this.setState({
            firstName: firstName,
            lastName: lastName,
            mobileNum: mobileNum,
            emailAdd: emailAdd,
            companyName: companyName,
            address: address,
            city: city,
            state: state,
            zip: zip,
            website: website,
        })
        console.log(this.state.firstName);
        console.log(this.state.lastName);
        console.log(this.state.mobileNum);
        console.log(this.state.emailAdd);
        console.log(this.state.companyName);
        console.log(this.state.address);
        console.log(this.state.city);
        console.log(this.state.state);
        console.log(this.state.zip);
        console.log(this.state.website);

        API.addUser({
          firstName: this.state.firstName, 
          lastName: this.state.lastName, 
          mobileNum: this.state.mobileNum,
          emailAdd: this.state.emailAdd,
          companyName: this.state.companyName,
          address: this.state.address,
          city: this.state.city,
          state: this.state.state,
          zip: this.state.zip,
          website: this.state.website,
        })
        .then(res => 
          console.log("Saved User: " + res))
          .catch(err => console.log(err))
      }

    loadQRCode = () => {
        const { qrCode } = this.state;
        API.getQR()
            .then(res =>
                this.setState({ qrCode: res.data, qrShowHide: "show" }))
        console.log("This is the qr state: " + qrCode);
    }
    generateQR = () => {
        console.log("generateQR");
        this.loadQRCode();
    }
    render() {
        return (
            <div className="container">
                <Nav />
                <div className="row mt-5">
                    <div className="col-md-6 mx-auto mb-4">
                        <h1 className="mx-auto"><span className="blue">CREATE NEW CARD</span></h1>
                    </div>
                </div>
                <div>
                    <Form
                        // value={this.state.firstName}
                        handleFormSubmit={this.handleFormSubmit}
                        handleInputChange={this.handleInputChange}
                        onClick={this.generateQR}
                    />

                </div>
            </div>
        );
    }
}


export default Generate;