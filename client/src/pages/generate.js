import React, { Component } from "react";
import Form from "../components/Form";
import QRCodeButton from "../components/QRCodeButton";
import API from '../utils/API';
// import Button from "../components/Button"
import QRCode from 'qrcode.react';
import "./style.css";

class Generate extends Component {
    state = {
        qrCode: "",
        qrShowHide: "hide",
        firstName: "",
        lastName: ""
    };

    componentDidMount() {
        this.setState({ qrCode: "" })
    }

    //help

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
            <div>
                <Form />
                <QRCodeButton
                onClick={this.generateQR}/>
                
                <QRCode value={this.state.qrCode} className={this.state.qrShowHide}></QRCode>

            </div>
        );
    }
}


export default Generate;