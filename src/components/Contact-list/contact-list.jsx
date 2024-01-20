import { useDispatch, useSelector } from 'react-redux';
import './contact-list.css';
import NotificationMessage from 'components/notification-message/NotificationMessage';
import { deleteContactThunk, getContactsThunk } from 'store/thunk/thunk';
import { selectFilter, selectVisibleContacts } from 'store/Slice/selectors';
import { useEffect } from 'react';

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const deleteContact = id => {
    dispatch(deleteContactThunk(id));
  };
  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const contactlist = visibleContacts.map(({ id, name, number }) => (
    <li className="item" key={id}>
      <span>{name}</span>:<span> {number}</span>
      <button type="button" onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  ));

  return (
    <div className="contacts">
      {visibleContacts.length === 0 ? (
        <NotificationMessage message={`No contact ${filter}`} />
      ) : (
        <ul>{contactlist}</ul>
      )}
    </div>
  );
};

export default ContactList;
