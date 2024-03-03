import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList'

function App() {
  const [selectedContactId, setselectedContactId] = useState(null);
  

  return (
    <>
      {selectedContactId ? (
        <div>Short message</div>
        ) : (
        <ContactList />
        )}
    </>
  );
}

export default App
