// import React, { Component } from 'react';

import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm/ContactForm';
import { Container } from './App.styled';
import { ContactList } from '../ContactList/ContactList';

import { Filter } from '../Filter/Filter';
// import contacts from './contacts.json';

//-----------------------------------------------
export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('' ?? []));
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  //   const parcedPhonebook = JSON.parse(window.localStorage.getItem(''));
  //   parcedPhonebook
  //     ? setContacts(parcedPhonebook)
  //     : setContacts(initialContacts);
  // }, []);

  const addContact = ({ name, number }) => {
    // const contact = {
    //   id: nanoid(),
    //   name,
    //   number,
    // };

    const isAvailableContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    isAvailableContact
      ? alert(`${name} is already in contacts`)
      : setContacts([...contacts, { name, id: nanoid() }]);
    // prevContacts => [contact, ...prevContacts]);
    console.log(contacts);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = contactID => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactID)
    );
  };

  const getVisibleContacts = () => {
    console.log('contacts', contacts);
    // const { filter, contacts } = this.state;
    // const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  //  const componentDidMount() {
  //     const contacts = localStorage.getItem('contacts');
  //     const parsedContacts = JSON.parse(contacts);

  //     if (parsedContacts) {
  //       this.setState({ contacts: parsedContacts });
  //     }
  //   }

  //  const componentDidUpdate(prevProps, prevState) {
  //     if (this.state.contacts !== prevState.contacts) {
  //       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //     }
  //   }

  // const visibleContacts = getVisibleContacts();

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onFilter={changeFilter} />
      <ContactList
        contacts={getVisibleContacts()}
        onDeleteContact={deleteContact}
      />
    </Container>
  );
}

//-----------------------------------------------
// export class App extends Component {
//   state = {
//     contacts,
//     filter: '',
//   };

// addContact = ({ name, number }) => {
//   const contact = {
//     id: nanoid(),
//     name,
//     number,
//   };

//   const isAvailableContact = this.state.contacts.find(
//     contact => contact.name.toLowerCase() === name.toLowerCase()
//   );
//   isAvailableContact
//     ? alert(`${name} is already in contacts`)
//     : this.setState(prevState => ({
//         contacts: [contact, ...prevState.contacts],
//       }));
// };

// changeFilter = e => {
//   this.setState({ filter: e.currentTarget.value });
// };

// deleteContact = contactID => {
//   this.setState(prevState => ({
//     contacts: prevState.contacts.filter(contact => contact.id !== contactID),
//   }));
// };

// getVisibleContacts = () => {
//   const { filter, contacts } = this.state;
//   const normalizedFilter = filter.toLowerCase();
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// };

// componentDidMount() {
//   const contacts = localStorage.getItem('contacts');
//   const parsedContacts = JSON.parse(contacts);

//   if (parsedContacts) {
//     this.setState({ contacts: parsedContacts });
//   }
// }

// componentDidUpdate(prevProps, prevState) {
//   if (this.state.contacts !== prevState.contacts) {
//     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//   }
// }

// render() {
// const visibleContacts = this.getVisibleContacts();

// return (
//   <Container>
//     <h1>Phonebook</h1>
//     <ContactForm onSubmit={this.addContact} />
//     <h2>Contacts</h2>
//     <Filter value={this.state.filter} onFilter={this.changeFilter} />
//     <ContactList
//       contacts={visibleContacts}
//       onDeleteContact={this.deleteContact}
//     />
//   </Container>
// );
//   }
// }
//=============
// const useLocalStorage = key => {
//   const [state, setState] = useState(() => {
//     return JSON.parse(window.localStorage.getItem(key));
//     // const parcedPhonebook = JSON.parse(window.localStorage.getItem(key));
//     // parcedPhonebook
//     //   (?) setContacts(parcedPhonebook)
//     //   : setContacts(initialContacts);
//   });

//   useEffect(() => {
//     window.localStorage.setItem(key, JSON.stringify(state));
//   }, [key, state]);

//   return [state, setState];
// };

// export default function App() {
//   const [contacts, setContacts] = useState('contacts');
//   const [filter, setFilter] = useState('');

// useEffect(() => {
//   const parcedPhonebook = JSON.parse(window.localStorage.getItem(''));
//   parcedPhonebook
//     ? setContacts(parcedPhonebook)
//     : setContacts(initialContacts);
// }, []);

//   const addContact = ({ name, number }) => {
//     const isAvailableContact = contacts.find(
//       contact => contact.name.toLowerCase() === name
//     );

//     isAvailableContact
//       ? alert(`${name} is already in contacts`)
//       : setContacts(prevContacts => {
//           const newContact = { id: nanoid(), name, number };
//           console.log(contacts);
//           return [...prevContacts, newContact];
//         });

//     const contact = {
//       id: nanoid(),
//       name,
//       number,
//     };
//   };

// const changeFilter = e => {
//   setFilter(e.currentTarget.value);
// };

//   const deleteContact = contactId => {
//     setContacts(prevState =>
//       prevState.filter(contact => contact.id !== contactId)
//     );
//   };

//   const getVisibleContacts = () => {
//     if (!filter) return [...contacts];

//     const normalizedFilter = filter.toLowerCase();
//     return [...contacts].filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );

//     // const contactToLowerCase = filter.toLowerCase();

//     // return [...contacts].filter(({ name }) =>
//     //   name.toLowerCase().includes(contactToLowerCase)
//     // );
//   };

//   const visibleContacts = getVisibleContacts();

//   return (
//     <Container>
//       <h1>Phonebook</h1>
//       <ContactForm
//         onSubmit={addContact}
//         // onChange={handleInputChange}
//         // nameValue={name}
//         // numberValue={number}
//       />
//       {console.log(getVisibleContacts())}
//       <h2>Contacts</h2>
//       <Filter value={filter} onFilter={changeFilter} />
//       <ContactList
//         contacts={getVisibleContacts()}
//         onDeleteContact={deleteContact}
//       />
//     </Container>
//   );
// }
