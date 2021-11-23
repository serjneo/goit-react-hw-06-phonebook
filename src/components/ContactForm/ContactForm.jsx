import { useState } from 'react';
import actons from '../../redux/actons';
import { getContacts } from '../../redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import './ContactForm.scss';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const checkRepeatName = name => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
  };

  const checkRepeatNumber = number => {
    return contacts.find(contact => contact.number === number);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (checkRepeatName(name)) {
      toast.info(`'${name}' is already in use!`, {
        autoClose: 2500,
      });
    } else if (checkRepeatNumber(number)) {
      toast.info(`🤔 ${number} is already in use`, {
        autoClose: 2500,
      });
    } else {
      dispatch(actons.addContact(name, number));
      setName('');
      setNumber('');
    }
  };

  return (
    <form id="contact" className="form" onSubmit={handleSubmit}>
      <label>
        <p className="title">Name:</p>
        <input
          className="input"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        <p className="title">Number:</p>
        <input
          className="input"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      <button className="button" type="submit">
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
