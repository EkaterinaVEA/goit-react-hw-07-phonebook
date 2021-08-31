// import PropTypes from 'prop-types';
import shortid from "shortid";
import { RiFilter2Line } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import contactsActions from "../../redux/contacts/contacrtsActions";
import { getFilter } from "../../redux/contacts/contactsSelectors";
import { FilterContainer, Label, Input } from "./Filter.styles";

const Filter = (/*{ value, onChange }*/) => {
  const filterInputId = shortid();
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <>
      <FilterContainer>
        <Input
          id={filterInputId}
          name="filter"
          onChange={(e) =>
            dispatch(contactsActions.changeFilter(e.target.value))
          }
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

// Input.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
export default Filter;
