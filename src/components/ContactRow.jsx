import React from 'react';

function ContactRow( { contact, setSelectedContactId }) {
    return (
        <tr onClick={function() {
            setSelectedContactId(contact.id);
            }}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
        </tr>
    );
}

export default ContactRow;