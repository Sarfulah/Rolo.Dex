import React from "react";

function Form(props) {
    return (
        <div className="jumbotron generate">
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputName">FIRST NAME</label>
                        <input type="text" className="form-control" id="inputName" placeholder="John" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">LAST NAME</label>
                        <input type="text" className="form-control" id="inputName" placeholder="Smith" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputMobile">Mobile</label>
                        <input type="text" name="mobileNum" className="form-control" id="inputMobile" placeholder="Mobile"  value={props.mobileNum} onChange={props.handleInputChange}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="text" name="emailAdd" className="form-control" id="inputEmail4" placeholder="your@email.com"  value={props.emailAdd} onChange={props.handleInputChange}/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputAddress">Company</label>
                    <input type="text" name="companyName" className="form-control" id="inputCompany" placeholder="Company"  value={props.companyName} onChange={props.handleInputChange}/>
                </div>
                <div className="form-group">
                    <label for="inputAddress2">Address</label>
                    <input type="text" name="address" className="form-control" id="inputAddress2" placeholder="123 Street Name"  value={props.address} onChange={props.handleInputChange}/>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input type="text" name="city" className="form-control" id="inputCity"  value={props.city} onChange={props.handleInputChange}/>
                    </div>
                    <div className="form-group col-md-4">
                        <label for="inputState">State</label>
                        <select id="inputState" name="state" className="form-control"  value={props.state} onChange={props.handleInputChange}>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </select>
                    </div>
                    <div className="form-group col-md-2">
                        <label for="inputZip">Zip</label>
                        <input type="text" name= "zip" className="form-control" id="inputZip"  value={props.zip} onChange={props.handleInputChange}/>
                    </div>
                </div>
                <div>
                    <div className="form-group">
                        <label for="inputAddress">Website</label>
                        <input type="text" name="website" className="form-control" id="inputAddress" placeholder="Website"  value={props.website} onChange={props.handleInputChange}/>
                    </div>
                </div>
                <div className="row">

                <button onClick={props.handleFormSubmit} type="submit" className="btn btn-lg loginB mx-auto mt-3">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Form;