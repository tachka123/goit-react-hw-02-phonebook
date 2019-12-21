import React, { Component } from 'react';
import T from 'prop-types';
import getID from 'uuid/v4';
import style from './sectionAddNew.module.css';

const nameId = getID();
const numberId = getID();

class SectionAddNewUser extends Component {
  static propTypes = {
    addUser: T.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleOnChange = e => {
    const targetName = e.target.name;
    this.setState({ [targetName]: e.target.value });
  };

  render() {
    const { name, number } = this.state;
    const { addUser } = this.props;
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          addUser(name, number);
          this.setState({ name: '', number: '' });
        }}
        className={style.container}
      >
        <label htmlFor={nameId}>
          <h2>Name</h2>
          <input
            value={name}
            name="name"
            onChange={this.handleOnChange}
            type="text"
          />
        </label>
        <label htmlFor={numberId}>
          <h2>Number</h2>
          <input
            className={style.inputNumber}
            value={number}
            name="number"
            onChange={this.handleOnChange}
            type="number"
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default SectionAddNewUser;
