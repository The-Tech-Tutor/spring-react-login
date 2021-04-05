import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  renderCircles() {
    return (
      <div className="container">
        <div className="graf-bg-container">
          <div className="graf-layout">
            <div className="graf-circle"></div>
            <div className="graf-circle"></div>
            <div className="graf-circle"></div>
            <div className="graf-circle"></div>
            <div className="graf-circle"></div>
            <div className="graf-circle"></div>
            <div className="graf-circle"></div>
            <div className="graf-circle"></div>
            <div className="graf-circle"></div>
            <div className="graf-circle"></div>
            <div className="graf-circle"></div>
          </div>
        </div>
        <h1 className="home-title">React Login</h1>
      </div>
    );
  }

  render() {
    return <div className="home-container">{this.renderCircles()}</div>;
  }
}

export default Home;
