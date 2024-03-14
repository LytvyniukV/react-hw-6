import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name);
  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filteredContacts = getFilteredContacts();
  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <li className={css.item} key={id}>
            <Contact name={name} number={number} id={id} />
          </li>
        );
      })}
    </ul>
  );
};
