import React from "react";

function List({ contacts }) {
  return (
    <div>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.fullname} {contact.phone_number}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
