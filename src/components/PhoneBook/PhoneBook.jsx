import React, { Component } from 'react';
import uuid from 'uuid/v4';
import AddNew from './AddNewUser';
import ListOfUsers from './ListOfUsers';
import style from './sectionAddNew.module.css';

class PhoneBook extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };

  filter = e => {
    this.setState({ filter: e.target.value });
  };

  filteredUsers = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  handleOnChange = e => {
    const targetName = e.target.name;
    this.setState({ [targetName]: e.target.value });
  };

  addUser = () => {
    const { name, number, contacts } = this.state;
    if (name === '' || number === '') {
      alert('One of fields is empty! Please fill all inputs!');
      return;
    }
    if (contacts.find(item => item.name === name)) {
      alert('User with this name already created! Try another one');
      return;
    }
    this.setState(prev => {
      return {
        contacts: [
          ...prev.contacts,
          { name: prev.name, number: prev.number, id: uuid() },
        ],
        name: '',
        number: '',
        filter: '',
      };
    });
  };

  deleteUser = id => {
    this.setState(prev => {
      return {
        contacts: prev.contacts.filter(item => item.id !== id),
      };
    });
  };

  render() {
    const filtered = this.filteredUsers();
    const { name, number, filter } = this.state;
    return (
      <div className={style.center}>
        <AddNew
          inputName={name}
          inputNum={number}
          handleOnChange={this.handleOnChange}
          addUser={this.addUser}
        />
        <ListOfUsers
          filter={filter}
          OnFilterUsers={this.filter}
          contacts={filtered}
          deleteUser={this.deleteUser}
        />
      </div>
    );
  }
}

export default PhoneBook;
