import React, { Component } from 'react';
import Contacts from './Contacts/Contacts';
import Form from './Form/Form';

class App extends Component {
  static defaultProps = {
    contacts: [
      {
        id: 'id-1',
        name: 'Rosia Sinos',
        number: '456-15-45',
      },
      {
        id: 'id-2',
        name: 'Hermione Cline',
        number: '516-11-85',
      },
      {
        id: 'id-3',
        name: 'Edem Clements',
        number: '146-12-11',
      },
      {
        id: 'id-4',
        name: 'Annie Copeland',
        number: '389-09-01',
      },
    ],
  };
  state = {
    contacts: this.props.contacts,
    name: '',
  };

  formSubmitHandler = data => {
    console.log(data);
  };
  formNameHandler = (data = this.state.contacts) => {
    return data;
  };
  render() {
    return (
      <>
        <Form onSubmit={this.formSubmitHandler} onName={this.formNameHandler} />
        <Contacts name={this.formNameHandler()} />
      </>
    );
  }
}

export default App;
