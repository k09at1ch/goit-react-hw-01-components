import React from 'react';
import PropTypes from 'prop-types';
export const Statistics = ({ title, stats }) => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
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
          <li key={id} className="item" style={{ backgroundColor: color }}>
            <span className="label" >{label}</span>
            <span className="percentage"> {percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
Statistics.propTypes={
  title: PropTypes.string,
  stats: PropTypes.array,
  label: PropTypes.string,
  percentage: PropTypes.number
}
export default Statistics;