import React, { Component } from "react";
import './Hero.css';

class Hero extends Component {
  render() {
    return (
        <div className="hero">
            <h1>Say hallo to reactJS</h1>
            <h3>You will learn a frontend framework from scratch, to become a Ninka Developer.</h3>
            <button>Awesome!</button>
        </div>
    );
  }
}


export default Hero;