import React from 'react';
import { ContactItem, TextItem } from './Contact.styled';
import { Button } from 'components/ContactForm/ContactForm.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <ContactItem>
      <TextItem>
        {name}: {number}
      </TextItem>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Button>
    </ContactItem>
  );
};

export default Contact;
