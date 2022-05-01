import PropTypes from 'prop-types';

export default function Friends({ items }) {

return <ul class="friend-list">
    {items.map(({id, isOnline, avatar, name}) => (
        <li class="item" key={id}>
            <span class="status">{isOnline}</span>
            <img class="avatar" src={avatar} alt={name} width="48" />
            <p class="name">{name}</p>
        </li>
    ))}   
</ul>
}

Friends.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};