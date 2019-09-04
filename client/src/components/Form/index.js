import React from "react";
import Nav from "../Nav";

function Form(props) {
    return (
        <div>
            
            <Nav/>
            <form>
            <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">First Name</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="First Name" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputPassword4">Last Name</label>
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Last Name" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">Mobile</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Mobile" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputPassword4">Email</label>
                        <input type="password" className="form-control" id="inputPassword4" placeholder="your@email.com" />
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputAddress">Company</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Company" />
                </div>
                <div className="form-group">
                    <label for="inputAddress2">Address</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="123 Street Name" />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input type="text" className="form-control" id="inputCity" />
                    </div>
                    <div className="form-group col-md-4">
                        <label for="inputState">State</label>
                        <select id="inputState" className="form-control">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="form-group col-md-2">
                        <label for="inputZip">Zip</label>
                        <input type="text" className="form-control" id="inputZip" />
                    </div>
                </div>
                <div>
                <div className="form-group">
                    <label for="inputAddress">Website</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Website" />
                </div>
                </div>
                <div className="form-group">
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Form;