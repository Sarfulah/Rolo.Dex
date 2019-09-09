import React, { Component } from "react";
// import ReactDOM from "react-dom";
import "./style.css";
import Form from "../components/Form";
import Axios from "axios";
import API from "../utils/API";
import { Redirect } from 'react-router-dom';

class Generate extends Component {
    state = { 
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

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
        console.log({ [name]: value})
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

    render() {
        return (
            <div>
                <Form
                // value={this.state.firstName}
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
                />
            </div>
        );
    }
    }
    export default Generate;