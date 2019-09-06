import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "./style.css";
import Nav from "../components/Nav";

class Home extends Component {
    state = { show: false };



    render() {
        return (
            <div>
                <Nav />
                <div className="card-body">
                    <Link to="/newCard" className="btn btn-primary">CREATE NEW CARD</Link>

                    <Link to="/search" className="btn btn-primary">SEARCH ROLO.DEX</Link>
                </div>
            </div>
        );
    }
}
export default Home;