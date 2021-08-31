import PhoneBookListItem from "../PhoneBookListItem/PhoneBookListItem";
// import PropTypes from 'prop-types';
import { getFilteredContacts } from "../../redux/contacts/contactsSelectors";
import { useSelector, useDispatch } from "react-redux";
import contactsActions from "../../redux/contacts/contacrtsActions";
import { List } from "./PhoneBookList.styles";

const PhoneBookList = (/*{ contacts, onDeleteContact }*/) => {
  const contacts = useSelector(getFilteredContacts);
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
            onDeleteContact={() => dispatch(contactsActions.deleteContact(id))}
          />
        );
      })}
    </List>
  );
};

// PhoneBookList.propTypes = {
//   onDeleteContact: PropTypes.func.isRequired,
//   contacts:PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
// };

export default PhoneBookList;
