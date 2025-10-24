// src/components/ContactCard.jsx
import React, { useState } from 'react';
// 1. Import the default image
import defaultUserPhoto from '../assets/devault-user.svg';

const ContactCard = ({ contact }) => {
  const [copied, setCopied] = useState('');

  const handleCopy = (textToCopy, type) => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(type);
      setTimeout(() => {
        setCopied('');
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };

  return (
    <div className="bg-white p-4 sketch-border flex items-center space-x-4">
      {/* 2. Update the img tag to use the default photo as a fallback */}
      <img
        src={contact.photo || defaultUserPhoto}
        alt={contact.name}
        className="w-16 h-16 rounded-full object-cover sketch-border bg-gray-200" // Added a bg color for SVGs
      />

      <div className="flex-grow">
        <h3 className="text-xl font-semibold">{contact.name}</h3>
        <p className="text-sm text-gray-600">{contact.email}</p>
        <p className="text-sm text-gray-600">{contact.phone}</p>
      </div>

      <div className="flex flex-col space-y-2">
        <button
          onClick={() => handleCopy(contact.email, 'email')}
          className={`px-3 py-1 text-xs rounded sketch-border transition-colors ${
            copied === 'email'
              ? 'bg-green-100 text-green-800'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          {copied === 'email' ? 'Copied!' : 'Copy Email'}
        </button>
        <button
          onClick={() => handleCopy(contact.phone, 'phone')}
          className={`px-3 py-1 text-xs rounded sketch-border transition-colors ${
            copied === 'phone'
              ? 'bg-green-100 text-green-800'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          {copied === 'phone' ? 'Copied!' : 'Copy Phone'}
        </button>
      </div>
    </div>
  );
};

export default ContactCard;