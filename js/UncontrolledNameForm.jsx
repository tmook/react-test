import React from 'react';

class UncontrolledNameForm extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    alert('A name was submitted (uncontorlled): ' + this.name.value);
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" placeholder={this.props.ph} ref={input => this.name = input} />
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default UncontrolledNameForm;
