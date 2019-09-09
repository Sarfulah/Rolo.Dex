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
                <div className="row mt-5">
                    <div className="col-md-6 mx-auto mb-4">
                        <h1 className="mx-auto"><span className="green">SEARCH YOUR ROLO.DEX</span></h1>
                    </div>
                </div>

                <div className="row">
                    <div className="form-group col-md-4 mx-auto">
                        <input class="form-control" type="text" placeholder="Search" aria-label="Search" />
                    </div>
                </div>
                <div className="row">
                    <div className="row-md-12 mx-auto">
                        <button type="submit" className="btn btn-lg signupB">Submit</button>
                    </div>
                </div>

                <div className="row mt-5">
      
                    <div className="card contactBox mx-auto">
                        <div className="card-body">
                            <h2 className="card-title">
                                CONTACT NAME
                                </h2>

                            <div className="row">
                                <div className="col-md-6">
                                    <p>267-221-2223</p>
                                </div>

                                <div className="col-md-6">
                                    <p>email@email.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
   

            </div>
        );
    }
}

export default Search;
