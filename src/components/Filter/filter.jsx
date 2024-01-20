import { useDispatch, useSelector } from 'react-redux';
import './filter.css';
import { selectFilter } from 'store/Slice/selectors';
import { filterContacts } from 'store/Slice/FilterSlice';
const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filterContact = ({ target: { value } }) => {
    dispatch(filterContacts(value));
  };

  return (
    <div className="form-group ">
      <input
        className="form-field"
        type="text"
        value={filter}
        onChange={filterContact}
      />
    </div>
  );
};

export default Filter;
