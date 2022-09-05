import React from 'react';
import { nanoid } from 'nanoid';
const Contacts = ({ name }) => {
  return (
    <>
      <h2>Contacts</h2>
      <div>
        {name.map(({ name }) => {
          return <li key={nanoid()}>{name}</li>;
        })}
      </div>
    </>
  );
};

export default Contacts;
