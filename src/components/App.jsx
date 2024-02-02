import {
  TitleContacts,
  TitlePhonebook,
} from './ContactForm/ContactForm.styled';
import ContactList from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';

export const App = () => {
  return (
    <>
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <ContactForm />
      <TitleContacts>Contacts</TitleContacts>
      <ContactList></ContactList>
    </>
  );
};
