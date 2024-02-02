import React, { useEffect } from 'react';
import { ListItem } from './ContactList.styled';
import Contact from 'components/Contact/Contact';
import FilterContact from 'components/FilterContact/FilterContact';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts.items);
  const filter = useSelector(state => state.filters.filter);

  const onFilteredContact = contacts.filter(contact =>
    contact.name.toUpperCase().includes(filter.toUpperCase())
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <FilterContact />
      <ListItem>
        {onFilteredContact.map(contact => (
          <Contact key={contact.id} {...contact} />
        ))}
      </ListItem>
    </>
  );
};

export default ContactList;
