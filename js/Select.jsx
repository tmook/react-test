import React from 'react';

export default class Select extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: this.props.options[0]};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({value: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    alert('You selected: ' + this.state.value);
  }

  render(){
    const optionElements = this.props.options.map(
      (option, index) => <option key={index} value={option}>
                  {option.charAt(0).toUpperCase()+option.slice(1)}
                </option>
    );

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <select value={this.state.value} onChange={this.handleChange}>
            {optionElements}
          </select>
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }
}
