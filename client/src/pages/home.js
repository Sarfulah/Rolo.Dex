import React, { Component } from "react";
import ReactDOM from "react-dom";
import Button from "../components/Button";
import "./style.css";
import Nav from "../components/Nav";

class Home extends Component {
    state = { show: false };



    render() {
        return (
            <div className="container">
                <Nav />
                <div className="jumbotron home">
                    <div className="row">
                        <div className="col-md-12 mb-5">
                            <a href="/newCard"><Button className="btn btn-lg loginB ml-5 mr-5">CREATE NEW CARD</Button></a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <a href="/search"><Button className="btn btn-lg signupB ml-5 mr-5">SEARCH ROLO.DEX</Button></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;