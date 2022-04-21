import s from './Filter.module.css';
import PropTypes from 'prop-types';

function Filter({value, onChange}) {
  return (
    <div className={s.filter}>
      <label className={s.labelFilter}>
          Find contacts by name
          <input
            type="text"
          name="filter"
          className={s.input}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          value={value}
          placeholder='Enter name'
            onChange={onChange}
          />
        </label>
      </div>
        
    )
}

export default Filter;

Filter.propTypes = {
  value: PropTypes.string, 
  onChange: PropTypes.func,
}