import ContactItem from '../ContactItem';
import s from './ContactList.module.css';
import PropTypes from 'prop-types';

export default function ContactList ({contacts, toDelete}) {
    return (
        <ul className={s.list}>
            <ContactItem contacts={contacts} toDelete={toDelete}/>
        </ul>
    );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    toDelete: PropTypes.func,
}