import PropTypes from 'prop-types';

import css from './Statistics.module.css';

import { getRandomHexColor, calcWidthStatsItem } from 'utils';

const Statistics = ({ title, stats = [] }) => {
  const width = calcWidthStatsItem(stats);
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => {
          const color = getRandomHexColor();
          return (
            <li
              key={id}
              className={css.item}
              style={{ backgroundColor: color, width: width }}
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
