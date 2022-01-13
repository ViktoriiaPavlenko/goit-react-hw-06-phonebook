import styles from './ContactsList.module.css';
// import PropTypes from 'prop-types';
// import ContactsListItem from './ContactsListItem';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/contacts/contacts-actions';

export default function ContactList() {
  const filteredContacts = useSelector(getFilteredContacts);
  console.log(filteredContacts);
  const dispatch = useDispatch();
  const handleDelete = id => dispatch(actions.deleteContact(id));

  return filteredContacts.length === 0 ? (
    <div className={styles.warning}>You have no contacts!</div>
  ) : (
    <ul className={styles.list}>
      {filteredContacts.map(contact => (
        // <ContactsListItem key={contact.id} contact={contact} />
        <li key={contact.id} className={styles.item}>
          <span className={styles.info}>
            {contact.name}: {contact.number}
          </span>
          <button
            className={styles.button}
            type="button"
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
// const ContactsList = ({ contacts, onDeleteContact }) =>
//   contacts.length === 0 ? (
//     <div className={styles.warning}>You have no contacts!</div>
//   ) : (
//     <ul className={styles.list}>
//       {contacts.map(contact => (
//         <li key={contact.id} className={styles.item}>
//           <ContactsListItem
//             contact={contact}
//             onDeleteContact={onDeleteContact}
//           />
//         </li>
//       ))}
//     </ul>
//   );

// ContactsList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }).isRequired,
//   ).isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };
