import { useState } from 'react';
import { Button, Form, Input, Label } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from '../../redux/operations';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts.items);

  const [value, setValue] = useState({
    name: '',
    number: '',
  });

  const handleChange = ({ target: { value, name } }) => {
    setValue(prevValue => ({ ...prevValue, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const id = nanoid();
    if (contacts.some(contact => contact.name === value.name)) {
      setValue({
        name: '',
        number: '',
      });
      return alert(`${value.name} is already in contacts.`);
    }
    dispatch(addContact({ id, name: value.name, number: value.number }));
    setValue({
      name: '',
      number: '',
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={value.name}
          onChange={handleChange}
          required
          pattern="^[a-zA-Zа-яА-Я]+([ '—][a-zA-Zа-яА-Я]+)*$"
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          value={value.number}
          onChange={handleChange}
          required
          pattern="\+?\d{1,4}?[ .\-]?\(?\d{1,3}?\)?[ .\-]?\d{1,4}[ .\-]?\d{1,4}[ .\-]?\d{1,9}"
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
