import React from 'react';
import T from 'prop-types';
import getID from 'uuid/v4';
import style from './sectionAddNew.module.css';

const nameId = getID();
const numberId = getID();

const SectionAddNew = ({ inputName, inputNum, handleOnChange, addUser }) => {
  return (
    <div className={style.container}>
      <label htmlFor={nameId}>
        <h2>Name</h2>
        <input
          value={inputName}
          name="name"
          onChange={handleOnChange}
          type="text"
        />
      </label>
      <label htmlFor={numberId}>
        <h2>Number</h2>
        <input
          value={inputNum}
          name="number"
          onChange={handleOnChange}
          type="texrt"
        />
      </label>
      <button onClick={addUser} type="button">
        Add contact
      </button>
    </div>
  );
};
SectionAddNew.propTypes = {
  handleOnChange: T.func.isRequired,
  addUser: T.func.isRequired,
  inputName: T.string.isRequired,
  inputNum: T.string.isRequired,
};
export default SectionAddNew;
