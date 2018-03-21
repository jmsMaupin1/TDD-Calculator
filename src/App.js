import React, { Component } from 'react'; 
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      currentNumber: "0",
      currentOp: ""
    }
  }

  handleNumberClick(n) {
    this.setState({currentNumber: n})
  }



  render() {
    return (
      <div className="App" style={{paddingTop: "5px"}}>
        <div id="display" className="col-lg-3 clearfix" style={{margin: "auto", border: "1px solid black"}}>
          <h2 style={{float: "right"}}>{this.state.currentNumber}</h2>
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
            <button onClick={()=>this.setState({currentNumber: "0"})} className="col-lg-2 col-md-2 col-sm-2 button">C</button>
            <button className="col-lg-2 col-md-2 col-sm-2 button">←</button>
            <button className="col-lg-2 col-md-2 col-sm-2 button">/</button>
          </div>
          <div className="row buttonpad">
            <button onClick={this.handleNumberClick.bind(this, 7)} className="col-lg-2 col-md-2 col-sm-2 button">7</button>
            <button onClick={this.handleNumberClick.bind(this, 8)} className="col-lg-2 col-md-2 col-sm-2 button">8</button>
            <button onClick={this.handleNumberClick.bind(this, 9)} className="col-lg-2 col-md-2 col-sm-2 button">9</button>
            <button className="col-lg-2 col-md-2 col-sm-2 button">X</button>
          </div>
          <div className="row buttonpad">
            <button onClick={this.handleNumberClick.bind(this, 4)} className="col-lg-2 col-md-2 col-sm-2 button">4</button>
            <button onClick={this.handleNumberClick.bind(this, 5)} className="col-lg-2 col-md-2 col-sm-2 button">5</button>
            <button onClick={this.handleNumberClick.bind(this, 6)} className="col-lg-2 col-md-2 col-sm-2 button">6</button>
            <button className="col-lg-2 col-md-2 col-sm-2 button">-</button>
          </div>
          <div className="row buttonpad">
            <button onClick={this.handleNumberClick.bind(this, 1)} className="col-lg-2 col-md-2 col-sm-2 button">1</button>
            <button onClick={this.handleNumberClick.bind(this, 2)} className="col-lg-2 col-md-2 col-sm-2 button">2</button>
            <button onClick={this.handleNumberClick.bind(this, 3)} className="col-lg-2 col-md-2 col-sm-2 button">3</button>
            <button className="col-lg-2 col-md-2 col-sm-2 button">+</button>
          </div>
          <div className="row buttonpad">
            <button className="col-lg-2 col-md-2 col-sm-2 button">+/-</button>
            <button onClick={this.handleNumberClick.bind(this, 0)} className="col-lg-2 col-md-2 col-sm-2 button">0</button>
            <button className="col-lg-2 col-md-2 col-sm-2 button">.</button>
            <button className="col-lg-2 col-md-2 col-sm-2 button">=</button>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
