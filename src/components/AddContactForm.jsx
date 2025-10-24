// src/components/AddContactForm.jsx
import React, { useState } from 'react';

const AddContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [photo, setPhoto] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !email || !phone) {
      alert("Please fill in Name, Email, and Phone fields.");
      return;
    }
    onAddContact({ name, email, phone, photo });
    setName('');
    setEmail('');
    setPhone('');
    setPhoto('');
    setShowForm(false);
  };

  return (
    <div className="mb-4">
      <button
        onClick={() => setShowForm(!showForm)}
        className="w-full bg-[var(--primary-orange)] text-black py-2 px-4 sketch-border hover:bg-orange-600 transition-colors"
      >
        {showForm ? 'Cancel' : 'Add New Contact'}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="mt-4 space-y-3 p-4 sketch-border bg-gray-50">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 sketch-border focus:outline-none focus:ring-2 focus:ring-[var(--primary-orange)]"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 sketch-border focus:outline-none focus:ring-2 focus:ring-[var(--primary-orange)]"
            required
          />
          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 sketch-border focus:outline-none focus:ring-2 focus:ring-[var(--primary-orange)]"
            required
          />
          <input
            type="url"
            placeholder="Photo URL (optional)"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            className="w-full p-2 sketch-border focus:outline-none focus:ring-2 focus:ring-[var(--primary-orange)]"
          />
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 sketch-border hover:bg-green-600 transition-colors"
          >
            Save Contact
          </button>
        </form>
      )}
    </div>
  );
};

export default AddContactForm;