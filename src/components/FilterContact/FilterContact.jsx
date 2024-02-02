import React from 'react';
import { Input } from 'components/ContactForm/ContactForm.styled';
import { LabelFindText } from './FilterContact.styled';
import { useDispatch } from 'react-redux';
import { filteredContact } from '../../redux/filtersSlice';

const FilterContact = () => {
  const dispatch = useDispatch();
  return (
    <LabelFindText>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        onChange={e => dispatch(filteredContact(e.target.value))}
      />
    </LabelFindText>
  );
};

export default FilterContact;
