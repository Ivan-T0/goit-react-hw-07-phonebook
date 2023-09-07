
  import ContactForm from './ContactForm/ContactForm';
import ContactList from "./ContactList/ContactList";
import { useGetContactByNameQuery } from '../redux/servises/contactsApi'
import { useDeleteContactMutation } from '../redux/servises/contactsApi'




  import Filter from './Filter/Filter';
  
  const App = () => {
    
    const { data  } = useGetContactByNameQuery()
    const [deleteContact,{isLoading: isDeleting}] = useDeleteContactMutation()



   return (
     <div>
       <h1>Phonebook</h1>
      <ContactForm  />
        <h2>Contacts</h2>
        <Filter/>
        
       {data && <ContactList contacts={data} onDelete={deleteContact} deleting={isDeleting} />}
      </div>
    );

    
};



  export default App;