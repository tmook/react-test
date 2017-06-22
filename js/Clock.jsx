import React from 'react';


export default class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount(){
  this.timerId = setInterval(()=>this.tick(), 1000);
  }

  componentWillUnmount(){
    clearInterval(this.timerId);
  }

  tick(){
    this.setState({date: new Date()});
  }

  render(){
    return (
      <h3>{this.props.msg} {this.state.date.toLocaleTimeString()}</h3>
    );
  }
}
