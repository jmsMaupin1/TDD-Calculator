import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{paddingTop: "5px"}}>
        <div className="col-lg-3 clearfix" style={{margin: "auto", border: "1px solid black"}}>
          <p style={{float: "right"}}></p>
          <br/>
          <br/>
          <h2 style={{float: "right"}}>0</h2>
        </div>

        <div className="col-lg-3" style={{margin: "10px auto"}}>
          <div className="row buttonpad">
            <button className="col-lg-2 col-md-2 col-sm-2 button">%</button>
            <button className="col-lg-2 col-md-2 col-sm-2 button">sqrt</button>
            <button className="col-lg-2 col-md-2 col-sm-2 button">x^2</button>
            <button className="col-lg-2 col-md-2 col-sm-2 button">1/x</button>
          </div>
          <div className="row buttonpad">
            <button className="col-lg-2 col-md-2 col-sm-2 button">CE</button>
            <button className="col-lg-2 col-md-2 col-sm-2 button">C</button>
            <button className="col-lg-2 col-md-2 col-sm-2 button">←</button>
            <button className="col-lg-2 col-md-2 col-sm-2 button">/</button>
          </div>
          <div className="row buttonpad">
            <button className="col-lg-2 col-md-2 col-sm-2 button">7</button>
            <button className="col-lg-2 col-md-2 col-sm-2 button">8</button>
            <button className="col-lg-2 col-md-2 col-sm-2 button">9</button>
            <button className="col-lg-2 col-md-2 col-sm-2 button">X</button>
          </div>
          <div className="row buttonpad">
            <button className="col-lg-2 col-md-2 col-sm-2 button">4</button>
            <button className="col-lg-2 col-md-2 col-sm-2 button">5</button>
            <button className="col-lg-2 col-md-2 col-sm-2 button">6</button>
            <button className="col-lg-2 col-md-2 col-sm-2 button">-</button>
          </div>
          <div className="row buttonpad">
            <button className="col-lg-2 col-md-2 col-sm-2 button">1</button>
            <button className="col-lg-2 col-md-2 col-sm-2 button">2</button>
            <button className="col-lg-2 col-md-2 col-sm-2 button">3</button>
            <button className="col-lg-2 col-md-2 col-sm-2 button">+</button>
          </div>
          <div className="row buttonpad">
            <button className="col-lg-2 col-md-2 col-sm-2 button">+/-</button>
            <button className="col-lg-2 col-md-2 col-sm-2 button">0</button>
            <button className="col-lg-2 col-md-2 col-sm-2 button">.</button>
            <button className="col-lg-2 col-md-2 col-sm-2 button">=</button>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
