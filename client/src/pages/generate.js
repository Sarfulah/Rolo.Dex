import React, { Component } from "react";
// import ReactDOM from "react-dom";
import "./style.css";
import Form from "../components/Form";

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