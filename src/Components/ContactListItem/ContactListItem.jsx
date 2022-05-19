import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';
import { useDeleteContactsMutation } from '../../redux/ContactsApi';

function ContactListItem({ name, phone, id }) {
  const [deleteContacts, { isLoading: isDeleting }] =
    useDeleteContactsMutation();
  return (
    <li className={s.contact} key={id}>
      <p>
        {name}: {phone}
      </p>
      <button
        className={s.button}
        type="button"
        onClick={() => deleteContacts(id)}
        disabled={isDeleting}
      >
        {isDeleting ? 'Delete...' : 'Delete'}
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default ContactListItem;
