import React, {useState} from 'react';
import Header from './communs/Header';
import ContactForm from './contact/ContactForm';
import ContactList from './contact/ContactList';

import '../css/App.css';

const initialContactForm = {
  lastName: '',
  firstName: '',
  phoneNumber: '',
  email: ''
}

const App = () => {

  const [contact, setContact] = useState(initialContactForm);

  const updateField = (name, value) => {
    
    setContact({
      ...contact,
      [name]: value
    });
  }

  return (
    <div className="App">
      <Header />
      <div className="row">
        <div className="col-md-4" id="contactForm">
          <ContactForm contact={contact} updateField={updateField} />
        </div>
        <div className="col-md-8" id="contactList">
          <ContactList />
        </div>
      </div>
    </div>
  );
}

export default App;
