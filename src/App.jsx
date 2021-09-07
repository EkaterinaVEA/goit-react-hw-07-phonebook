import { useEffect } from 'react';
import { RiContactsFill, RiUserAddFill } from 'react-icons/ri';
import Section from './components/Section/Section';
import Container from './components/Container/Container';
import PhoneBookForm from './components/PhoneBookForm/PhoneBookForm';
import PhoneBookList from './components/PhoneBookList/PhoneBooklist';
import Filter from './components/Filter/Filter';
import { Loader } from './components/Loader/Loader';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from './redux/contacts';
import { ContainerContacts, ContainerAdd } from './components/Container/Container.styles';

const App = () => {
    const contacts = useSelector(contactsSelectors.getContacts);
    const isLoading = useSelector(contactsSelectors.getIsLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(contactsOperations.fetchContacts());
    }, [dispatch]);

    return (
        <>
            <Section title="Phone Book">
                <Container>
                    <ContainerAdd>
                        <h1>
                            <RiUserAddFill /> Add Contact
                        </h1>
                        <PhoneBookForm />
                    </ContainerAdd>

                    <ContainerContacts>
                        <h2>
                            <RiContactsFill />
                            Contacts
                        </h2>
                        <Filter />
                        {contacts.length > 0 && <PhoneBookList />}
                    </ContainerContacts>
                </Container>
            </Section>
            <Loader loading={isLoading} />
        </>
    );
};

export default App;
