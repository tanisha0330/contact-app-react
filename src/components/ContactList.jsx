// src/components/ContactList.jsx
import React from 'react';
import ContactCard from './ContactCard';

const ContactList = ({ contacts }) => {
  return (
    <div className="space-y-4 bg-amber-600 p-4 sketch-border">
      {contacts.map(contact => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default ContactList;