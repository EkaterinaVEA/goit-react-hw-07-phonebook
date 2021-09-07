import PhoneBookListItem from '../PhoneBookListItem/PhoneBookListItem';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import { List } from './PhoneBookList.styles';

const PhoneBookList = () => {
    const contacts = useSelector(contactsSelectors.getVisibleContacts);
    const dispatch = useDispatch();
    return (
        <List>
            {contacts.map(({ name, number, id }) => {
                return (
                    <PhoneBookListItem
                        key={id}
                        name={name}
                        number={number}
                        id={id}
                        onClick={() => dispatch(contactsOperations.deleteContact(id))}
                    />
                );
            })}
        </List>
    );
};

export default PhoneBookList;
