import React from 'react';
import ButtonMsg from './buttonMsg.jsx';

class ToggleButton extends React.Component{
  constructor(props){
    super(props);
    this.state = {toggleOn: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    this.setState( prevState => ({toggleOn: !prevState.toggleOn}) );
  }

  render(){
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.toggleOn ? "On" : "Off"}
        </button>
        {this.state.toggleOn && <ButtonMsg msg=" button is on!" />}
      </div>
    );
  }
}

export default ToggleButton;
