import { filterValue } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import actons from '../../redux/actons';
import './Filter.scss';

function Filter() {
  const filter = useSelector(filterValue);
  const dispatch = useDispatch();
  return (
    <input
      className="input"
      type="text"
      name="filter"
      onChange={e => dispatch(actons.filterContacts(e.target.value))}
      value={filter}
      placeholder="search contact"
    ></input>
  );
}

export default Filter;
