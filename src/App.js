import React, { Component } from 'react'; 
import Screen from './components/screen';
import Button from './components/button';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      total: null,
      current: null,
      dotPressed: false,
      op: null
    }
  }

  handleClick(key) {

    let operations = {
      "PM" : (a) => -a,
      "%" : (a, b) => a % b,
      "/" : (a, b) => a / b,
      "*" : (a, b) => a * b,
      "-" : (a, b) => a - b,
      "+" : (a, b) => a + b,
    }

    let {current, total, dotPressed, op} = this.state;  

    switch (key) {
      case "AC":
        this.setState({
          current: null,
          total: null,
          dotPressed: false,
          op: null
        });
        break;

      case "PM":
        this.setState({current: operations[key](current)});
        break;

      case ".":
        this.setState({dotPressed: true});
        break;

      case "=":
        if(op !== null) {
          let ans = operations[op](total, current)
          this.setState({current: ans, total: null, op: null});
        }
        this.setState({current: operations[op](total, current)});
        break;

      case "%":
      case "/":
      case "*":
      case "-":
      case "+":
        if(current === null) current = 0;
        if(op === null) this.setState({op: key, total: current, current: null});
        else {
          let ans = operations[op](total, current);
          this.setState({op: key, total: ans, current: null});
        }
        break;
        
      default:
        if(current === null) 
          this.setState({current: parseInt(key, 10)});
        else {
          if(dotPressed) {
            this.setState({
              current: current + "." + key,
              dotPressed: false
            });
          } else this.setState({current: current + key});
        }
        break;
    }
  }

  render() {
    return (
      <div className="App">
          <div className="calc-frame col-lg-3">
            <Screen>
              {this.state.current}
            </Screen>

            <div className="row">
              <Button handleClick={this.handleClick.bind(this, "AC")} bgColor="#a0a0a7" val="AC"/>
              <Button handleClick={this.handleClick.bind(this, "PM")} bgColor="#a0a0a7" val="±" />
              <Button handleClick={this.handleClick.bind(this, "%")} bgColor="#a0a0a7" val="%" />
              <Button handleClick={this.handleClick.bind(this, "/")} bgColor="#fc9c17" val="÷" />
            </div>
    
            <div className="row">
              <Button handleClick={this.handleClick.bind(this, "7")} bgColor="#e0e0e7" val="7"/>
              <Button handleClick={this.handleClick.bind(this, "8")} bgColor="#e0e0e7" val="8" />
              <Button handleClick={this.handleClick.bind(this, "9")} bgColor="#e0e0e7" val="9" />
              <Button handleClick={this.handleClick.bind(this, "*")} bgColor="#fc9c17" val="X" />
            </div>

            <div className="row">
              <Button handleClick={this.handleClick.bind(this, "4")} bgColor="#e0e0e7" val="4"/>
              <Button handleClick={this.handleClick.bind(this, "5")} bgColor="#e0e0e7" val="5" />
              <Button handleClick={this.handleClick.bind(this, "6")} bgColor="#e0e0e7" val="6" />
              <Button handleClick={this.handleClick.bind(this, "-")} bgColor="#fc9c17" val="-" />
            </div>

            <div className="row">
              <Button handleClick={this.handleClick.bind(this, "1")} bgColor="#e0e0e7" val="1"/>
              <Button handleClick={this.handleClick.bind(this, "2")} bgColor="#e0e0e7" val="2" />
              <Button handleClick={this.handleClick.bind(this, "3")} bgColor="#e0e0e7" val="3" />
              <Button handleClick={this.handleClick.bind(this, "+")} bgColor="#fc9c17" val="+" />
            </div>

            <div className="row">
              <Button handleClick={this.handleClick.bind(this, "0")} bgColor="#e0e0e7" expanded val="0"/>
              <Button handleClick={this.handleClick.bind(this, ".")} bgColor="#e0e0e7" val="." />
              <Button handleClick={this.handleClick.bind(this, "=")} bgColor="#fc9c17" val="=" />
            </div>
          </div>
      </div>
    );
  }
}

export default App;
