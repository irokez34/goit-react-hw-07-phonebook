import FormInput from './Form-input/form-input';
import ContactList from './Contact-list/contact-list';
import Filter from './Filter/filter';
import { getContactsApi } from 'fetch/fetch';

export const App = () => {
  getContactsApi();
  return (
    <div
      style={{
        width: '300px',
        margin: '200px auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <h1>PhoneBook</h1>
      <FormInput />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
