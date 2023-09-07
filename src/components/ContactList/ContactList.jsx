import cl from '../ContactForm/ContactForm.module.css'
import { getFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';

const ContactList = ({ contacts, onDelete, deleting }) => {
  const filter = useSelector(getFilter);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div>
      <ul>
        {filteredContacts.map((contact) => (
          <li key={contact.id}>
            {contact.name}: <br />
            {contact.phone}
            <button
              className={cl.text__Button}
              onClick={() => onDelete(contact.id)}
            >
              {deleting ? 'Deleting...' : 'Delete'}
            </button>
          </li>
          
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
