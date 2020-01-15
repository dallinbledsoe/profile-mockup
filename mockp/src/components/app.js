import React, { Component } from "react";
import ProfileContainer from "./profile/profile-container";
import "../style/main.scss"

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <ProfileContainer />
        </div>
    );
  }
}
