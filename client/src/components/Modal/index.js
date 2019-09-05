import React from "react";

function Modal(props) {
    return (
        <div className="modal fade" id={props.modalName} tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{props.title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div className="modal-body">

                        <div className="form-group">
                            <label className="col-sm-2 control-label"
                                htmlFor="inputEmail3">Email</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control"
                                    id="inputEmail3" placeholder="Email" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-sm-2 control-label"
                                htmlFor="inputPassword3" >Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control"
                                    id="inputPassword3" placeholder="Password" />
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={() => props.buttonFunction()}>{props.submitBtn}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;