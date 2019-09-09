import React, { Component } from "react";
import "./style.css";
import Nav from "../components/Nav";
import API from '../utils/API';
import QRCode from 'qrcode.react';

class QR extends Component {
    state = {
        qrCode: "",
        qrShowHide: "hide",
    };

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
                <div className="jumbotron qr">
                    <div className="row">
                        <div className="mx-auto">
                            <QRCode value={this.state.qrCode} className={this.state.qrShowHide} ></QRCode>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}

export default QR;