import FormInput from './Form-input/form-input';
import ContactList from './Contact-list/contact-list';
import Filter from './Filter/filter';

import { Loader } from './Loading/Loader';
import { Error } from './Error/error';

export const App = () => {
  return (
    <div style={{ margin: "0 auto", 
    width: "500px"}}>
      <h1 className="title">PhoneBook</h1>
      <FormInput />
      <Error />
      <Loader />
      <h2 className="title">Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
