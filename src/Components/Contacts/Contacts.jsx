import ContactList from '../ContactList';
import {
  useGetContactQuery,
  useDeleteContactsMutation,
} from '../../redux/ContactsApi';

function Contacts() {
  const { data, isFetching } = useGetContactQuery();
  const [deleteContacts] = useDeleteContactsMutation();

  return (
    <>
      {isFetching && '...Loading'}
      {data && <ContactList data={data} onDelete={deleteContacts} />}
    </>
  );
}

export default Contacts;
