import React from 'react';

const FormNewPerson = ({ addNewPerson }) => {
  return (
    <form onSubmit={ addNewPerson }>
      <input type="text" placeholder="podaj imię"/>
      <input type="number" placeholder="podaj wiek"/>
      <button type="submit">Dodaj osobę</button>
    </form>
  );
};
export default FormNewPerson;
