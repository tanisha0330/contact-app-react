// src/App.jsx
import React, { useMemo, useState } from 'react'; // <--- Ensure React is imported here
import { mockContacts } from './data';
import ContactList from './components/ContactList';
import SearchBar from './components/SearchBar';
import AddContactForm from './components/AddContactForm'; // <-- Ensure this is correct
// No need to import './App.css' anymore if you're using Tailwind

const App = () => {
  const [contacts, setContacts] = useState(mockContacts);
  const [searchQuery, setSearchQuery] = useState('');

  // FIX 2: useMemo should be directly assigned to the variable.
  // It returns the memoized VALUE, not a function that calls useMemo.
  const sortedAndFilteredContacts = useMemo(() => {
    // Filter the contacts based on search query
    const filtered = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Sort the filtered contacts by name, creating a shallow copy first
    return filtered.slice().sort((a, b) => a.name.localeCompare(b.name));
  }, [contacts, searchQuery]); // Dependencies: recalculate if contacts or searchQuery changes

  const addContact = (newContact) => {
    const contactToAdd = {
      id: Date.now(),
      ...newContact
    };
    // Use the functional update form of setContacts to ensure you're working with the latest state
    setContacts((prevContacts) => [...prevContacts, contactToAdd]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 space-y-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact App</h1>

        <AddContactForm onAddContact={addContact} />
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        {/* Conditional message for no contacts found */}
        {sortedAndFilteredContacts.length === 0 && searchQuery !== '' && (
          <p className="text-center text-gray-500 mt-4">No contacts found for "{searchQuery}".</p>
        )}
        {sortedAndFilteredContacts.length === 0 && searchQuery === '' && (
          <p className="text-center text-gray-500 mt-4">No contacts added yet. Add some above!</p>
        )}

        {/* FIX 3: Pass the correctly derived 'sortedAndFilteredContacts' */}
        <ContactList contacts={sortedAndFilteredContacts} />
      </div>
    </div>
  );
};

export default App;
