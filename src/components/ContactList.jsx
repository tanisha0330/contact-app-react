// src/components/ContactList.jsx
import React from 'react';
import ContactCard from './ContactCard';

const ContactList = ({ contacts }) => {
  return (
    <div>
      {contacts.map(contact => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default ContactList;