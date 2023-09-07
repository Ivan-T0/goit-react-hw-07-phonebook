import cl from '../ContactList/ContactList.module.css'
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
      <ul className={cl.contactList}>
        {filteredContacts.map((contact) => (
          <li key={contact.id} className={cl.contactItem}>
            <span className={cl.contactName}>{contact.name}:</span> <br />
            <span className={cl.contactPhone}>{contact.phone}</span>
            <button
              className={`${cl.text__Button} ${cl.deleteButton}`}
              onClick={() => onDelete(contact.id)}
              disabled={deleting}
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
