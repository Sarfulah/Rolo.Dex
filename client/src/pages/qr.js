import React, { Component } from "react";
import "./style.css";
import Nav from "../components/Nav";
import API from '../utils/API';
import QRCode from 'qrcode.react';
import axios from "axios";

class QR extends Component {
    constructor() {
        super()
        this.state = {
          loggedIn: false,
          username: null,
            qrCode: "",
            qrShowHide: "hide",
        };
    
        this.getUser = this.getUser.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.updateUser = this.updateUser.bind(this)
      }
    
      componentDidMount() {
        //this.getUser()
        this.generateQR()
      }
    
      updateUser (userObject) {
        this.setState(userObject)
      }
    
      getUser() {
        axios.get('/user/').then(response => {
          console.log('Get user response: ')
          console.log(response.data)
          if (response.data.user) {
            console.log('Get User: There is a user saved in the server session: ')
    
            this.setState({
              loggedIn: true,
              username: response.data.user.username
            })
          } else {
            console.log('Get user: no user');
            this.setState({
              loggedIn: false,
              username: null
            })
          }
        })
      }

    loadQRCode = () => {
        //const { qrCode } = this.state;
        API.getLatestQR()
            .then(data => {
                console.log("DATA");
                const qrData = "First Name: " + data.data.firstName + " / Last Name: " + data.data.lastName;
                console.log(data);
                this.setState({ qrCode: qrData, qrShowHide: "show" })
                // API.getQR(data)
                //     .then(res => {
                //         console.log(res);
                //         this.setState({ qrCode: res, qrShowHide: "show" })
                //     })
                })

    }
    generateQR = () => {
        console.log("generateQR");
        this.loadQRCode();
    }

    render() {
        return (
            <div className="container">
                <Nav />
                <div className="jumbotron qr mx-auto">
                    <div className="row">
                        <div className="mx-auto qrcode">
                            <QRCode value={this.state.qrCode} className={this.state.qrShowHide} ></QRCode>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}

export default QR;