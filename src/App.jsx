// src/App.jsx
import React, { useMemo, useState } from 'react';
import { mockContacts } from './data';
import ContactList from './components/ContactList';
import SearchBar from './components/SearchBar';
import AddContactForm from './components/AddContactForm';

const App = () => {
  const [contacts, setContacts] = useState(mockContacts);
  const [searchQuery, setSearchQuery] = useState('');

  const sortedAndFilteredContacts = useMemo(() => {
    const filtered = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return filtered.slice().sort((a, b) => a.name.localeCompare(b.name));
  }, [contacts, searchQuery]);

  const addContact = (newContact) => {
    const contactToAdd = { id: Date.now(), ...newContact };
    setContacts((prevContacts) => [...prevContacts, contactToAdd]);
  };

  return (
    <div className="min-h-screen p-4 font-['Architects_Daughter']">
      <div className="max-w-md mx-auto bg-white p-6 space-y-4 sketch-border">
        <h1 className="text-4xl font-bold text-center mb-6">Contact App</h1>
        <AddContactForm onAddContact={addContact} />
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <ContactList contacts={sortedAndFilteredContacts} />
      </div>
    </div>
  );
};

export default App;