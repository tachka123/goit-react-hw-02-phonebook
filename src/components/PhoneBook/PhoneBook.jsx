import React, { Component } from 'react';
import uuid from 'uuid/v4';
import AddNew from './SectionAddNewUser';
import ListOfUsers from './ListOfUsers';
import style from './sectionAddNew.module.css';

class PhoneBook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    if (contacts) {
      this.setState({ contacts: JSON.parse(contacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  filter = e => {
    this.setState({ filter: e.target.value });
  };

  filteredUsers = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  addUser = (name, number) => {
    const { contacts } = this.state;
    if (!name || !number) {
      alert('One of fields is empty! Please fill all inputs!');
      return false;
    }
    if (contacts.find(item => item.name === name)) {
      alert('User with this name already created! Try another one');
      return false;
    }
    this.setState(prev => {
      return {
        contacts: [...prev.contacts, { name, number, id: uuid() }],
        filter: '',
      };
    });
    return true;
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
    const { filter } = this.state;
    return (
      <div className={style.center}>
        <AddNew addUser={this.addUser} />
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
