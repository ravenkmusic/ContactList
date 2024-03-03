import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList'

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  
  return (
    <>
      {selectedContactId ? (
        <div>Short message</div>
        ) : (
        <ContactList setselectedContactId={setSelectedContactId} />
        )}
    </>
  );
}

export default App
