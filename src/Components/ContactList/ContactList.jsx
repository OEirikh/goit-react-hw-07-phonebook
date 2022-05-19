import { useGetContactQuery } from '../../redux/ContactsApi';
import ContactListItem from '../ContactListItem';
import s from './ContactList.module.css';

function ContactList() {
  const { data } = useGetContactQuery();

  return (
    data && (
      <ul className={s.contactList}>
        {data.map(contact => (
          <ContactListItem key={contact.id} {...contact} />
        ))}
      </ul>
    )
  );
}

export default ContactList;
