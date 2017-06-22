import React from 'react';

export default class Reservation extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    
    this.setState( {[name]:value} );
  }

  handleSubmit(e){
    e.preventDefault();
    const isGoing = this.state.isGoing ? "going" : "not going";
    const numGuest = this.state.numberOfGuests;

    alert('you are ' + isGoing + " with " + numGuest + " guests");
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleChange} />
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }

}


