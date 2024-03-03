import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList'
import SelectedContact from 'src/SelectedContact.jsx'

function App() {
  const [selectedContactId, setselectedContactId] = useState(null);
  
  return (
    <>
      {selectedContactId ? (
        <div>Short message</div>
        ) : (
        <ContactList setselectedContactId={setselectedContactId}/>
        )}
    </>
  );
}

export default App
