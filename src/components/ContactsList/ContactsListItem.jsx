import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import todosActions from '../../redux/contacts/contacts-actions';
import styles from './ContactsList.module.css';

export default function Contact({ contact }) {
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  const handleDelete = e => {
    e.preventDefault();
    dispatch(todosActions.changeFilter(''));
    dispatch(todosActions.deleteContact(id));
  };

  return (
    <>
      <span className={styles.info}>
        {name}: {number}
      </span>
      <button className={styles.button} type="button" onClick={handleDelete}>
        Delete
      </button>
    </>
  );
}

// Contact.propTypes = {
//   contact: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//   }).isRequired,
// };

// const ContactsListItem = ({ contact, onDeleteContact }) => (
//   <>
//     <span className={styles.info}>
//       {contact.name}: {contact.number}
//     </span>
//     <button
//       className={styles.button}
//       type="button"
//       onClick={() => onDeleteContact(contact.id)}
//     >
//       Delete
//     </button>
//   </>
// );
