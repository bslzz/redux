import React from 'react';

const ContactMapped = ({ contact }) => {
  return (
    <tr key={contact.id}>
      <td>
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custome-control-input" />
          <label className="custom-control-input"></label>
        </div>
      </td>
      <td>{contact.name}</td>
      <td>{contact.phone}</td>
      <td>{contact.email}</td>
    </tr>
  );
};

export default ContactMapped;
