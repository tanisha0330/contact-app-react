// src/components/ContactCard.jsx
import React from 'react';

const ContactCard = ({ contact }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200 mb-3 flex items-center space-x-4">
      {contact.photo && ( // Conditionally render photo if it exists
        <img
          src={contact.photo}
          alt={contact.name}
          className="w-16 h-16 rounded-full object-cover border-2 border-blue-300" // Tailwind classes for image
        />
      )}
      <div> {/* Container for text details */}
        <h3 className="text-lg font-semibold text-gray-900">{contact.name}</h3>
        <p className="text-sm text-gray-600">Email: <span className="font-medium">{contact.email}</span></p>
        <p className="text-sm text-gray-600">Phone: <span className="font-medium">{contact.phone}</span></p>
      </div>
    </div>
  );
};

export default ContactCard;