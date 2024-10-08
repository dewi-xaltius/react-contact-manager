import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Contact } from '../modules/contact';
import ContactList from './ContactList';
import AddContactForm from './AddContactForm';

const ContactManager = () => {
    const [contacts, setContacts] = useState([]);

    // Function to add a new contact
    // Concept: Arrow Function
    const addContact = (name, email) => {
        const contact = new Contact(name, email);
        setContacts([...contacts, contact]);
    };

    // Function to delete a contact by ID
    const deleteContact = (id) => {
        setContacts(contacts.filter(contact => contact.id !== id));
    };

    // Fetch initial contacts from API
    // Concept: Async/Await using Axios
    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users?_limit=5');
                const initialContacts = response.data.map(({ name, email }) => new Contact(name, email));
                setContacts(initialContacts);
            } catch (error) {
                console.error('Error fetching initial contacts', error);
            }
        };
        fetchContacts();
    }, []);

    return (
        <div className="container">
            <h1>Contact Manager</h1>
            <AddContactForm addContact={addContact} />
            <ContactList contacts={contacts} deleteContact={deleteContact} />
        </div>
    );
};

export default ContactManager;
