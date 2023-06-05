import React from 'react';
import PropTypes from 'prop-types';
export const Statistics = ({ title, stats }) => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul
        className="stat-list"
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 20,
          listStyle: 'none',
        }}
      >
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className="item" style={{ backgroundColor: getRandomHexColor() }}>
            <span className="label" >{label}</span>
            <span className="percentage"> {percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default Statistics;