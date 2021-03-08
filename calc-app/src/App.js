// import logo from './logo.svg';
import React,{Component} from 'react'
import './App.css';
import Button from './components/Button.js'
import Input from './components/Input.js'
import ClearButton from './components/ClearButton.js'

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       input:"",
       prevNum:"",
       currNum:"",
       operator:""
    }
  }
  
  

  addZeroTo = val =>{
    // if this.state.input is not empty then add zero
    if (this.state.input !== " ")
    {
      this.setState({input:this.state.input+val});
    }
  };

  addDecTo=val=>{
    // only add decimal if there is no current decimal points 
    if(this.state.input.indexOf(".")===-1)
    {
      this.setState({
        input:this.state.input+val
      })
    }
  };

  addToInput=val=>{
    this.setState({
      input:this.state.input+val
    })
  };

  clearInput =()=>{
    this.setState({
      input:""
    })

  };

addInput =()=>{
  // we store the prev number into a memory when we type a new number this oveeride the input field 
  this.state.prevNum=this.state.input
  this.setState({
    input:""
  })
  this.state.operator="plus"
};
substract =()=>{
  this.state.prevNum=this.state.input
  this.setState({
    input:""
  })
  this.state.operator="substarct"
};

multiply=()=>{
  this.state.prevNum=this.state.input
  this.setState({
    input:""
  })
  this.state.operator="multiply"
};

divide = () => {
  this.state.prevNum = this.state.input;
  this.setState({ input: "" });
  this.state.operator = "divide";
};

equalTo=()=>{

  this.state.currNum =this.state.input
  if(this.state.operator == "plus"){
    this.setState({
      input:parseInt(this.state.prevNum)+parseInt(this.state.currNum)
    })
  }

  else if(this.state.operator == "substarct"){
    this.setState({
      input:parseInt(this.state.prevNum)-parseInt(this.state.currNum)
    })
  }

  else if(this.state.operator == "multiply"){
    this.setState({
      input:parseInt(this.state.prevNum)*parseInt(this.state.currNum)
    })
  }

  else if (this.state.operator == "divide") {
    this.setState({
      input:
        parseInt(this.state.prevNum) / parseInt(this.state.currNum)
    })
  }
  

};
  render()
  {
  return (
    <div className="App">
      <div className="calc-wrapper">
        <div className="row">
          <Input>{this.state.input}</Input>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput}>7</Button>
          <Button handleClick={this.addToInput}>8</Button>
          <Button handleClick={this.addToInput}>9</Button>
          <Button handleClick={this.divide}>/</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput}>4</Button>
          <Button handleClick={this.addToInput}>5</Button>
          <Button handleClick={this.addToInput}>6</Button>
          <Button handleClick={this.multiply}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput}>1</Button>
          <Button handleClick={this.addToInput}>2</Button>
          <Button handleClick={this.addToInput}>3</Button>
          <Button handleClick={this.addInput}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addDecTo}>.</Button>
          <Button handleClick={this.addZeroTo} >0</Button>
          <Button handleClick={this.equalTo}>=</Button>
          <Button handleClick={this.substract}>-</Button>
        </div>
        <div className="row">
          <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
        </div>
      </div>
     
    </div>
  );
  }
}

export default App;
