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
            <div className="container-fluid">
                <Nav/>
                <div className="row">
                    <div className="col-6">
                        <input class="form-control" type="text" placeholder="Search" aria-label="Search" />
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                    <div className="col-12">
                        <h1>Mapped data here</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;
