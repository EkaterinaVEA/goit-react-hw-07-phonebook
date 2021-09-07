import shortid from 'shortid';
import { RiFilter2Line } from 'react-icons/ri';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contactsSlice';
import { contactsSelectors } from '../../redux/contacts';
import { FilterContainer, Label, Input } from './Filter.styles';

const Filter = () => {
    const filterInputId = shortid();
    const value = useSelector(contactsSelectors.getFilter);
    const dispatch = useDispatch();

    return (
        <>
            <FilterContainer>
                <Input
                    id={filterInputId}
                    name="filter"
                    onChange={e => dispatch(changeFilter(e.target.value))}
                    type="text"
                    value={value}
                    placeholder="Name"
                />
                <Label htmlFor={filterInputId}>
                    <RiFilter2Line size="30" />
                    Find contact by name
                </Label>
            </FilterContainer>
        </>
    );
};

export default Filter;
