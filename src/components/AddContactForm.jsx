// src/components/AddContactForm.jsx
import React, { useState } from 'react';

const AddContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [photo, setPhoto] = useState('');
  const [showForm, setShowForm] = useState(false); // State to toggle form visibility

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the page from reloading
    if (!name || !email || !phone) {
      alert("Please fill in Name, Email, and Phone fields.");
      return;
    }
    onAddContact({ name, email, phone, photo }); // Pass all new contact details
    // Clear the form fields after submission
    setName('');
    setEmail('');
    setPhone('');
    setPhoto('');
    setShowForm(false); // Hide form after submission
  };

  return (
    <div className="mb-4 p-4 border border-blue-200 bg-blue-50 rounded-lg">
      <button
        onClick={() => setShowForm(!showForm)}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200"
      >
        {showForm ? 'Hide Form' : 'Add New Contact'}
      </button>

      {showForm && ( // Conditionally render the form
        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">Add Contact Details</h3>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <input
            type="tel"
            placeholder="Phone (e.g., 123-456-7890)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <input
            type="url" // Use type="url" for better validation for image URLs
            placeholder="Photo URL (optional)"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transition-colors duration-200"
          >
            Save Contact
          </button>
        </form>
      )}
    </div>
  );
};

export default AddContactForm;