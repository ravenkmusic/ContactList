import { useEffect, useState } from "react";
import ContactRow from "./ContactRow";


const API_URL = `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users`;

const SelectedContact = ({selectedContactId, setSelectedContactId}) => {
    const [contact, setContact] = useState(null);
    
    useEffect(()=>{
        async function fetchSelectedContact() {
            try {
                const response = await fetch(`${API_URL}/${selectedContactId}`);
                const result = await response.json();
                setContact(result);
            } catch (error) {
                console.error("Can't retrieve data", error);
            }
        }

        if (selectedContactId){
            fetchSelectedContact();
        }

    },[selectedContactId]);
    return (
        <>
        <table>
          <thead>
            <tr>
              <th colSpan="3">Selected Contact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
            </tr>
            <ContactRow
                    contact = {contact} 
                    setselectedContactId = {setSelectedContactId} 
            />
          </tbody>
        </table>
        </>
    );
}

export default SelectedContact;