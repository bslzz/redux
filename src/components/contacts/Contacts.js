import React from 'react';
import { useSelector } from 'react-redux';
import ContactMapped from './ContactMapped';

const Contacts = () => {
  const contacts = useSelector((state) => state.contacts);
  console.log(contacts);
  return (
    <div className="table-responsive">
      <table className="table table-dark table-striped table-hover">
        <thead>
          <tr>
            <th>
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custome-control-input" />
                <label className="custom-control-input"></label>
              </div>
            </th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <ContactMapped contact={contact} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
