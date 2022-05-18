import ContactList from '../ContactList';
import {
  useGetContactQuery,
  useDeleteContactsMutation,
} from '../../redux/ContactsApi';

function Contacts() {
  const { data } = useGetContactQuery();
  const [deleteContacts, { isLoading: isDeleting }] =
    useDeleteContactsMutation();

  return (
    <>
      {data && (
        <ContactList
          data={data}
          onDelete={deleteContacts}
          isDeleting={isDeleting}
        />
      )}
    </>
  );
}

export default Contacts;
