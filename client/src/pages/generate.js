import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Form from "../components/Form";
import Nav from "../components/Nav";

class Generate extends Component {
    state = { show: false };



    render() {
        return (
            <div className="container">
                <Nav />
                <div className="row">
                    <div className="col-md-12">
                        <h1>CREATE NEW CARD</h1>
                    </div>
                </div>
            <div>
                <Form/>
            </div>
            </div>
        );
    }
    }
    export default Generate;