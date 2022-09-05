import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class Form extends Component {
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
  onInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  onSubmit = e => {
    e.preventDefault();
    this.setState(p => {
      p.contacts.push({ id: nanoid(), name: this.state.name, number: '' });
    });
    this.props.onSubmit(this.state);
    this.props.onName(this.state.contacts);
    this.reset();
  };
  reset = () => {
    this.setState({ contacts: this.props.contacts, name: '' });
  };
  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <form onSubmit={this.onSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <button type="submit">Add contact</button>
        </form>
        {/* <h2>Contacts</h2>
        <div>
          {name.map(({ name, id }) => {
            return <li key={id}>{name}</li>;
          })}
        </div> */}
      </>
    );
  }
}

export default Form;
