import React, { Component } from 'react';

class Calculator extends Component{
  constructor(props){
      super()
      this.state ={
        value1: "",
        value2: "",
        answer: "Enter values above and click on evaluator"
      }
  }
  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  evaluate(op){
    var result
    var num1 = parseInt(this.state.value1, 10)
    var num2 = parseInt(this.state.value2, 10)
    if(op === "add"){
      result = num1 + num2
      this.setState({
        answer: result
      })
    }else if(op === "sub"){
      result = num1 - num2
      this.setState({
        answer: result
      })
    }else if(op === "multi"){
      result = num1 * num2
      this.setState({
        answer: result
      })
    }else if(op === "div"){
      if(this.state.value1 > 0){
        result = num1 / num2
      }else{
        result = "Cant Divide by 0 my dude."
      }
      this.setState({
        answer: result
      })
    }
  }
  render(){
    return(
      <div className="container">
        <h1>Add with React!</h1>

        <div className="add">
          <label>Number 1</label>
          <input name="value1" type="text" value={this.state.value1} onChange={(e) => this.handleChange(e)}/>
          <br />
          <label>Number 2</label>
          <input name="value2" type="text" value={this.state.value2} onChange={(e) => this.handleChange(e)}/>
          <h5>Choose Evaluator</h5>
          <button onClick={(e) => this.evaluate("add")}>Add</button>
          <button onClick={(e) => this.evaluate("sub")}>Subtract</button>
          <button onClick={(e) => this.evaluate("multi")}>Multiply</button>
          <button onClick={(e) => this.evaluate("div")}>Divide</button>
          <br />
          <h3>Results Below</h3>
          <h5>{this.state.answer}</h5>
        </div>
      </div>
    )
  }
}
export default Calculator
