// import React from 'react';
import { useDeleteContactsMutation } from '../../redux/ContactsApi';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import Button from '../Button';

function ContactList({ data, onDelete }) {
  const [deleteContacts] = useDeleteContactsMutation();

  return (
    data && (
      <ul className={s.ContactList}>
        {data.map(({ name, phone, id }) => (
          <li className={s.Contact} key={id}>
            <p>
              {name}: {phone} : {id}
            </p>

            <Button
              onDelete={deleteContacts}
              id={id}
              text="Delete"
              type="button"
            />
          </li>
        ))}
      </ul>
    )
  );
}

export default ContactList;

ContactList.propTypes = {
  options: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    idx: PropTypes.number.isRequired,
  }),
};
