import Swal from 'sweetalert2';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import shortid from 'shortid';
import { Form, Label, Input, Button, ContainerForm } from './PhoneBookForm.styles';
import { RiUserLine, RiPhoneLine, RiUserAddLine } from 'react-icons/ri';

const PhoneBookForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();
    const contacts = useSelector(contactsSelectors.getContacts);

    const nameInputId = shortid();
    const telInputId = shortid();

    const checkContact = (contacts, name, number) => {
        const includedName = contacts.find(
            contact => contact.name.toLowerCase() === name.toLowerCase(),
        );

        const includedNumber = contacts.find(
            contact => contact.number.replace(/[^0-9]/g, '') === number.replace(/[^0-9]/g, ''),
        );

        if (includedName) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: `${name.toUpperCase()}\nis already in contacts!`,
                confirmButtonColor: 'indianred',
            });

            return includedName;
        }

        if (includedNumber) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: `This number is already in contacts as\n${includedNumber.name.toUpperCase()}`,
                confirmButtonColor: 'indianred',
            });
            return includedNumber;
        }
    };

    const handleSetUserInfo = e => {
        const { name, value } = e.currentTarget;

        switch (name) {
            case 'name':
                setName(value);
                break;

            case 'number':
                setNumber(value);
                break;

            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        const existedContact = checkContact(contacts, name, number);

        if (existedContact) return;

        dispatch(contactsOperations.addContact({ name, number }));
        setName('');
        setNumber('');
    };

    return (
        <Form onSubmit={handleSubmit} action="">
            <ContainerForm>
                <Input
                    onChange={handleSetUserInfo}
                    id={nameInputId}
                    type="text"
                    name="name"
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    placeholder="Name"
                    autoComplete="off"
                    maxLength="40"
                    required
                />
                <Label htmlFor={nameInputId}>
                    <RiUserLine size="25" />
                    Name
                </Label>
            </ContainerForm>
            <ContainerForm>
                <Input
                    onChange={handleSetUserInfo}
                    id={telInputId}
                    type="tel"
                    name="number"
                    value={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    placeholder="111-11-11"
                    autoComplete="off"
                    maxLength="15"
                    required
                />
                <Label htmlFor={telInputId}>
                    <RiPhoneLine size="25" />
                    Number
                </Label>
            </ContainerForm>
            <Button type="submit">
                <RiUserAddLine />
                Add contact
            </Button>
        </Form>
    );
};
export default PhoneBookForm;
