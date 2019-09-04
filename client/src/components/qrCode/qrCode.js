import React, {Component} from "react";
import API from '../utils/API';
import Button from "../components/Button"
import QRCode  from 'qrcode.react';
import style from "./index.css";

class Rolodex extends Component {
  state = {
    qrCode: "",
    qrShowHide: "hide",
    firstName: "", 
    lastName: ""
  }
  componentDidMount(){
    this.setState({ qrCode: ""})
  }

  //help

  loadQRCode = () => {
    const { qrCode } = this.state;
    API.getQR()
    .then(res => 
      this.setState({ qrCode: res.data, qrShowHide: "show"}))
      console.log("This is the qr state: " + this.state.qrCode);
  }
  generateQR = () => {
    console.log("generateQR");
    this.loadQRCode();
  }


  render() {
    return (
      <div>
        <Button onClick={this.generateQR}>QRcode</Button>
        <QRCode value={this.state.qrCode} className={this.state.qrShowHide}></QRCode>
      </div>
    )
  }
}
export default Rolodex;