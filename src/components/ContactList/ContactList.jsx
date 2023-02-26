import PropTypes from 'prop-types';
import { List, Item, ButtonDelete } from './ContactList.styled';

export default function ContactList({ contacts, onClick }) {
    return (
      <List>
        {contacts.map(({ name, number, id }) => (
        <Item key={id}>
          <span>
            {name}: {number}
          </span>
          <ButtonDelete type="button" onClick={() => onClick(name)} name={name}>
            Delete
          </ButtonDelete>
        </Item>
       ))}
      </List>
    )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
  ),
  onClick: PropTypes.func.isRequired,
};