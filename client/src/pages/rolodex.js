import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import DeleteBtn from "../components/DeleteBtn";
// import Form from "../components/Form";
// import Saved from '../components/Saved/index';
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import "./style.css";
// import { Input, TextArea, FormBtn } from "../components/Form";

class Rolodex extends Component {
//   state = {
//     bookSearch: "",
//     books: []
//   };

//   componentDidMount() {
//     this.loadBooks();
//   }

//   handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };

//   handleOnClick = event => {
//     console.log("I clicked saved")

//   }
//   handleFormSubmit = event => {
//     event.preventDefault();
//     this.loadBooks();

//   }

//   loadBooks = () => {
//     console.log(this.state.bookSearch);
//     API.getBooks(this.state.bookSearch)
//       .then(res => {
//         console.log(res.data);
//         this.setState({ books: res.data })
//       })
//       .catch(err => console.log(err));
//   };

  render() {
    return (
      <div>

         <Jumbotron className="jumbotron jumbotron-fluid">
           <h1>Hello World</h1>
         
       </Jumbotron>


      </div>
    );
  }
}

export default Rolodex;
