import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import API from "../utils/API";
import Nav from "../components/Nav";
import "./style.css";

class Search extends Component {
    state = {
        results: []
    };

    render() {
        return (
            <div className="container">
                <Nav />
                <div className="row">
                    <div className="col-md-12">
                        <h1>SEARCH YOUR ROLO.DEX</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-4 mx-auto">
                        <input class="form-control" type="text" placeholder="Search" aria-label="Search" />
                    </div>
                </div>
                <div className="row">
                <div className="row-md-12 mx-auto">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                </div>

                <div className="col-md-12">
                    <h1>Mapped data here</h1>
                </div>

            </div>
        );
    }
}

export default Search;
