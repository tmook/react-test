import React from 'react';

export default class TextAreaForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({value: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    alert('An essay was submitted: ' + this.state.value);
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea placeholder={this.props.ph} value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }
}
