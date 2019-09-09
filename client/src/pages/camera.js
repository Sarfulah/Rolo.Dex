import React, { Component } from "react";
import Nav from "../components/Nav"
import "./style.css";
import Webcam from "react-webcam";


class Camera extends Component {

  state = {
    imageData: null,
    image_name: "",
    saveImage: false
  }

  setRef = (webcam) => {
    this.webcam = webcam;
  }

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.setState({
      imageData: imageSrc
    })
  };

  onClickRetake = (e) => {
    e.persist();
    this.setState({
      imageData: null
    })
  };

  onClickSave = (e) => {
    e.persist();
    this.setState((previousState) => {
      return {
        saveImage: !previousState.saveImage
      }
    });
  }

  handleChange = (e) => {
    e.persist();
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSaveSubmit = (e) => {
    e.preventDefault();
    let imageObject = {
      image_name: this.state.image_name,
      job_id: this.props.job.id,
      image_data: this.state.imageData
    }
    this.props.saveJobImage(imageObject)
  }

  saveform = () => {
    return (
      <div>
        <form onSubmit={this.handleSaveSubmit}>
          <p>
            <label>Image name: </label>
            <input type="text"
              name="image_name"
              value={this.state.image_name}
              onChange={this.handleChange} />
            <input type="submit" value="Save" />
          </p>
        </form>
      </div>
    )
  }
  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user",
    };

    return (
      <div className="container">
        <Nav />
        <div className="jumbotron camera">
          <div className="row">
            <Webcam className="mx-auto"
              audio={false}
              height={350}
              ref={this.setRef}
              screenshotFormat="image/jpeg"
              width={350}
              videoConstraints={videoConstraints}
            />
          </div>
          <div className="row mb-5">
            <div className="button-container    mx-auto"><button className="loginB btn btn-lg" onClick={this.capture}>Capture photo</button>
            </div>

          </div>

          <div className="row mt-5">
            {this.state.imageData ?
              <div className="mx-auto mt-5">
                <p><img src={this.state.imageData} alt="" /></p>
                <span><button className="mt-5 signupB btn btn-lg ml-5" onClick={this.onClickRetake}>Retake Photo</button></span>
                <span><button className="mt-5 ml-5 loginB btn btn-lg" onClick={this.onClickSave}>Save</button></span>
                {this.state.saveImage ? this.saveForm() : null}
              </div>
              : null}
          </div>
        </div>
      </div>
    );

  }
}

export default Camera;