import { useSelector } from 'react-redux';
import { useGetContactQuery } from '../../redux/ContactsApi';
import ContactListItem from '../ContactListItem';
import s from './ContactList.module.css';

function ContactList() {
  const { data } = useGetContactQuery();
  const filter = useSelector(state => state.filter);
  const contacts =
    data && data.filter(contact => contact.name.toLowerCase().includes(filter));
  return (
    data && (
      <ul className={s.contactList}>
        {contacts.map(contact => (
          <ContactListItem key={contact.id} {...contact} />
        ))}
      </ul>
    )
  );
}

export default ContactList;
