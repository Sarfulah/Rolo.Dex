import React, { Component } from "react";
// import ReactDOM from "react-dom";
import "./style.css";
import Form from "../components/Form";
import Nav from "../components/Nav";

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
                />
            </div>
            </div>
        );
    }
    }
    export default Generate;