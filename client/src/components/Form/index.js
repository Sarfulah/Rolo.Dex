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
                        <label htmlFor="inputMobile">MOBILE</label>
                        <input type="text" className="form-control" id="inputMobile" placeholder="215-555-1234" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">EMAIL</label>
                        <input type="text" className="form-control" id="inputEmail4" placeholder="your@email.com" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress">COMPANY</label>
                    <input type="text" className="form-control" id="inputCompany" placeholder="Company" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress2">ADDRESS</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="123 Street Name" />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputCity">CITY</label>
                        <input type="text" className="form-control" id="inputCity"
                        placeholder="Philadelphia" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputState">STATE</label>
                        <select id="inputState" className="form-control">
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
                        <label htmlFor="inputZip">ZIP CODE</label>
                        <input type="text" className="form-control" id="inputZip" placeholder="12345" />
                    </div>
                </div>
                <div>
                    <div className="form-group">
                        <label htmlFor="inputAddress">WEBSITE</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="yoursite.url" />
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