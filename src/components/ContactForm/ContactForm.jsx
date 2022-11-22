// import React, { Component } from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';

import { Form, Label, Button } from './ContactForm.styled';

const nameID = nanoid();
const numberID = nanoid();

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name } = event.target;

    switch (name) {
      case 'name':
        setName(event.target.value);
        break;

      case 'number':
        setNumber(event.target.value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit({ name, number });

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={nameID}>
        Name
        <input
          type="text"
          name="name"
          id={nameID}
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label htmlFor={numberID}>
        Number
        <input
          type="tel"
          name="number"
          id={numberID}
          value={number}
          onChange={handleChange}
          pgitattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
}

//=====================================================
// export class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

// handleChange = event => {
//   const { name, value } = event.target;
//   this.setState(() => ({ [name]: value }));
// };

// handleSubmit = event => {
//   event.preventDefault();

//   this.props.onSubmit(this.state);

//   this.reset();
// };

// reset = () => {
//   this.setState({
//     name: '',
//     number: '',
//   });
// };

// render() {
//   return (
//     <Form onSubmit={this.handleSubmit}>
//       <Label htmlFor={nameID}>
//         Name
//         <input
//           type="text"
//           name="name"
//           id={nameID}
//           value={this.state.name}
//           onChange={this.handleChange}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />
//       </Label>
//       <Label htmlFor={numberID}>
//         Number
//         <input
//           type="tel"
//           name="number"
//           id={this.numberID}
//           value={this.state.number}
//           onChange={this.handleChange}
//           pgitattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />
//       </Label>
//       <Button type="submit">Add contact</Button>
//     </Form>
//   );
// }
// }
