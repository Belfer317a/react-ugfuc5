import React, { useState } from 'react';
import FormNewPerson from './FormNewPerson';

const Names = () => {
  const [personArr, setPersonArr] = useState([]);

  const addNewPerson = (evt) => {
    evt.preventDefault();
    const newPerson = {
      name: evt.target[0].value,
      age: evt.target[1].value,
    };
    setPersonArr([...personArr, newPerson]);

    evt.target.reset();
  };

  return (
    <>
      {personArr.map((person, index) => {
        return (
          <p key={index}>
            {person.name} lat: {person.age}
          </p>
        );
      })}
      <FormNewPerson addNewPerson={addNewPerson} />
    </>
  );
};

// const Names = () => {
//   const [personArr, setPersonArr] = useState([
//     { name: 'Józek', age: 35 },
//     { name: 'Madzia', age: 25 },
//   ]);

//   const addNewPerson = (evt) => {
//     evt.preventDefault();
//     if (evt.target[0].value.length<3 || evt.target[1].value===null ) {
//         alert('wpisz poprawne dane')
//     } else{
//       const newPerson = {
//         name: evt.target[0].value,
//         age: evt.target[1].value,
//       };
//       setPersonArr([...personArr, newPerson]);
//       evt.target.reset();
//     }
//   }

//   return (

//     <>
//       <h4>Lista osób:</h4>
//       {personArr.map((person, index) => (
//         <p key={index}>
//           {person.name.toUpperCase()} lat: {person.age}
//         </p>
//       ))}
//       <FormNewPerson handleAddPerson={addNewPerson} />
//     </>

//   );
// };
export default Names;
