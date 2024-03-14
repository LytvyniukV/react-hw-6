import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { useId } from 'react';
import { changeFilter } from '../../redux/filtersSlice';
export const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.name);
  const inputId = useId();
  return (
    <div className={css.container}>
      <label htmlFor={inputId} className={css.label}>
        Find contacts by name
      </label>
      <input
        type="text"
        className={css.input}
        name="name"
        id={inputId}
        value={filter}
        onChange={e => dispatch(changeFilter(e.target.value))}
        autoComplete="off"
      />
    </div>
  );
};
