import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList'
import ContactRow from "./components/ContactRow"
import SelectedContact from './components/SelectedContact'

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  
  return (
    <>
      {selectedContactId ? (
        <div><SelectedContact selectedContactId = {selectedContactId} setSelectedContactId = {setSelectedContactId}/></div>
        ) : (
        <ContactList setSelectedContactId = {setSelectedContactId} />
        )}
    </>
  );
}

export default App