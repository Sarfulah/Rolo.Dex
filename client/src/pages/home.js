import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Nav from "../components/Nav";

class Home extends Component {
    state = { show: false };



render() {
    return (
        <div>
            <Nav/>
            <div class="card-body">
                <a href="#" class="btn btn-primary">CREATE NEW CARD</a>
                <a href="#" class="btn btn-primary">SEARCH ROLO.DEX</a>
            </div>
        </div>
    );
}
}
export default Home;