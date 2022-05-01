import PropTypes from 'prop-types';

export default function StatisticsTable({ items }) {
  return <ul class="stat-list">
    {items.map(({ id, label, percentage }) => (
        <li class="item" key={id}>
            <span class="label">{label}</span>
            <span class="percentage">{percentage}</span>
      </li>
    ))}
  </ul>
}

StatisticsTable.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};