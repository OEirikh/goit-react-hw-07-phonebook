// import { useSelector } from 'react-redux';
import s from './ContactsList.module.css';
import Contact from './Contact';
import { useGetContactQuery } from '../../redux/ContactsApi';

function ContactsList() {
  const { data, error, isLoading } = useGetContactQuery();
  console.log(data);
  // const filter = useSelector(state => state.filter);

  // const list = () => {
  //   return (
  //     data &&
  //     data.filter(contact => contact.name.toLowerCase().includes(filter))
  //   );
  // };

  return (
    data && (
      <ul className={s.ContactList}>
        {data.map(({ name, phone, id }, idx) => (
          <Contact key={id} idx={idx} name={name} number={phone} id={id} />
        ))}
      </ul>
    )
  );
}

export default ContactsList;
