import React, { Component } from 'react';

class App extends Component{
  constructor(){
    super();
    this.state={
      year : []
    }
  }

componentDidMount() {
  const loopyear=[]
    for (var i = 1900; i <= 20000; i++) {
      loopyear.push(i);
    }
    this.setState({
      year:loopyear
    })
}
  render(){
    return(
      <div>
        <select>{
          this.state.year.map(myyear=>(
            <option>{myyear}</option>
          ))
          }
        </select>
      </div>
    );
  }
}

export default App;
