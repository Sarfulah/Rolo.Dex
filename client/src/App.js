import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";
import Camera from "./pages/camera";
import Loading from "./pages/loading";
import Generate from "./pages/generate";
import QR from "./pages/qr";
import Search from "./pages/search";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCamera, faQrcode } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";

library.add(fab, faCamera, faQrcode)


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }
  render() {
  return (
    // <Rolodex />
    <Router>
    <div>
    <Route exact path="/" render={() =>
      <Loading
        updateUser={this.updateUser}
      />}
     />
    <Route exact path="/loggedin" component={Home} />
    <Route exact path="/newCard" component={Generate} />
    <Route exact path="/search" component={Search} />
    <Route exact path="/camera" component={Camera} />
    <Route exact path="/qr" component={QR}/>
    </div>
    </Router>
  );
  }
}

export default App;