import React from 'react';
import T from 'prop-types';
import User from './User';
import Filter from './Filter';

const ListOfUsers = ({ contacts, deleteUser, OnFilterUsers, filter }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <Filter filter={filter} OnFilterUsers={OnFilterUsers} />
      {contacts.map(({ name, number, id }) => {
        return (
          <User
            deleteUser={deleteUser}
            key={id}
            name={name}
            id={id}
            number={number}
          />
        );
      })}
    </div>
  );
};
ListOfUsers.defaultProps = {
  contacts: [],
};
ListOfUsers.propTypes = {
  contacts: T.arrayOf(
    T.shape({
      name: T.string,
      number: T.string,
    }),
  ),
  deleteUser: T.func.isRequired,
  OnFilterUsers: T.func.isRequired,
  filter: T.string.isRequired,
};

export default ListOfUsers;
