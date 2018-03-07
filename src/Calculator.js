import React, { Component } from 'react';

class Calculator extends Component{
  constructor(props){
      super()
      this.state ={
        value1: 0,
        value2: 0,
        answer: "Enter values above and click on evaluator"
      }
      this.handleChange = this.handleChange.bind(this)
      this.evaluate = this.evaluate.bind(this)
  }

  handleChange(item, e){
    if(item === 1){
      this.setState({
        value1: e.target.value
      })
    }
    if(item === 2){
      this.setState({
        value2: e.target.value
      })
    }
  }

  evaluate(op){
    var result = 0
    if(op === "add"){
      result = parseInt(this.state.value1) + parseInt(this.state.value2)
      this.setState({
        answer: result
      })
    }
    if(op === "sub"){
      result = parseInt(this.state.value1) - parseInt(this.state.value2)
      this.setState({
        answer: result
      })
    }
    if(op === "multi"){
      result = parseInt(this.state.value1) * parseInt(this.state.value2)
      this.setState({
        answer: result
      })
    }
    if(op === "div"){
      if(this.state.value1 > 0){
        result = parseInt(this.state.value1) / parseInt(this.state.value2)
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
          <label for="number1">Number 1</label>
          <input name="number1" type="text" value={this.state.value1} onChange={(e) => this.handleChange(1,e)}/>
          <br />
          <label>Number 2</label>
          <input type="text" value={this.state.value2} onChange={(e) => this.handleChange(2,e)}/>
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
