import PropTypes from 'prop-types';
import s from './ContactList.module.css';

function ContactList({ data, onDelete, isDeleting }) {
  return (
    data && (
      <ul className={s.contactList}>
        {data.map(({ name, phone, id }) => (
          <li className={s.contact} key={id}>
            <p>
              {name}: {phone}
            </p>
            <button
              className={s.button}
              type="button"
              onClick={() => onDelete(id)}
              disabled={isDeleting}
            >
              {isDeleting ? 'Delete...' : 'Delete'}
            </button>
          </li>
        ))}
      </ul>
    )
  );
}

export default ContactList;

ContactList.propTypes = {
  data: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  isDeleting: PropTypes.bool.isRequired,
};
