
import React, { Component } from 'react'

import SeasonDisplay from "./Components/SeasonDisplay"

import Spinner from './Components/Spinner'
class App extends Component {

  state = {
    lat: null,
    errmsg: ''
  };
  //  lifecycle component lagaye ge hai yaha pr
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(

      (position) => { this.setState({ lat: position.coords.latitude }) },
      (err) => { this.setState({ errmsg: err.message }) }
    );
  }
  componentDidUpdate() {
    console.log("updates")
  }


   renderContent () {
    if (this.state.errmsg && !this.state.lat) {
      return (
        <div>
          <h1>


            <SeasonDisplay err={this.state.errmsg} />

          </h1></div>
      )

    } if (!this.state.errmsg && this.state.lat) {
      return (
        <div>
          <h1>


            <SeasonDisplay latitude={this.state.lat} />
          </h1>
        </div>)
    }
    return (
      <Spinner message="Please accept location request" />
    )

  }
  render() {
    return (
      <div className="border red">
        {this.renderContent()}

      </div>
    )
  }


}
export default App;