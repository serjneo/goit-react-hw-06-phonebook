import { useSelector, useDispatch } from 'react-redux';
import { filteredContacts } from '../../redux/selectors';
import actons from '../../redux/actons';
import './ContactList.scss';

function ContactList() {
  const contacts = useSelector(filteredContacts);
  const dispatch = useDispatch();
  return (
    <ul className="list">
      {contacts.map(contact => (
        <li key={contact.id}>
          <p className="title">Name: {contact.name}</p>
          <p className="title">Number: {contact.number}</p>
          <button
            className="button"
            onClick={() => dispatch(actons.deleteContact(contact.id))}
            type="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
