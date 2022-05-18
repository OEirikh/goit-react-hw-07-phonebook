import ContactList from '../ContactList';
import { useGetContactQuery } from '../../redux/ContactsApi';

function Contacts() {
  const { data, isFetching } = useGetContactQuery();

  return (
    <>
      {isFetching && '...Loading'},{data && <ContactList data={data} />}
    </>
  );
}

export default Contacts;
