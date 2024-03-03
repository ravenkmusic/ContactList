import React from "react";
import { useState } from 'react';
import ContactRow from "./ContactRow";
import { useEffect } from "react";

    
const dummyContacts = [
    { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
    { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
    { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
  ];

const API_URL = `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users`;

function ContactList (){
    const [contacts, setContacts] = useState(dummyContacts);

    console.log("Contacts: ", contacts);

    // i am very pleased to say that i actually was able to come up with the useEffect logic myself, lol.
    useEffect(()=>{
        async function fetchContacts() {
            try {
                const response = await fetch(`${API_URL}`);
                const result = await response.json();
                console.log(result);
            } catch (error) {
                console.error("Can't retrieve data", error);
            }
        }
        fetchContacts();
    },[]);

    return (
        <table>
          <thead>
            <tr>
              <th colSpan="3">Contact List</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
            </tr>
            {
               contacts.map((contact) => {
                return <ContactRow key = {contact.id} contact = {contact} />
               })
             }
          </tbody>
        </table>
    );
}

export default ContactList