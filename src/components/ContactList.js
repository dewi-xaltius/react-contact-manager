import React from 'react';

const ContactList = ({ contacts, deleteContact }) => {
    return (
        <ul>
            {contacts.map(({ id, name, email }) => (
                <li key={id}>
                    {name} ({email})
                    <button onClick={() => deleteContact(id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default ContactList;
