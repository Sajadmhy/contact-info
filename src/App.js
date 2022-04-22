import { useState } from "react";
import UserForm from "./components/ContactForm.jsx";
import UserList from "./components/ContactList.jsx";


function App() {

  const [contacts, updateContacts] = useState([]);

  const addContact = (contactInfo) => {
    updateContacts([...contacts, contactInfo]);
  };
  console.log(contacts)

  return (
    <div>
      <UserForm addContact={addContact} />
      <UserList contacts={contacts} />
    </div>
  );
}

export default App;
