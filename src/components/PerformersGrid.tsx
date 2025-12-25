import type { Stock } from '../types';
import styles from './PerformersGrid.module.css';

interface Props {
  gainers: Stock[];
  losers: Stock[];
}

export function PerformersGrid({ gainers, losers }: Props) {
  return (
    <div className={styles.performersGrid}>
      <div className={styles.performerCard}>
        <h3>
          <span className={styles.emoji}>TOP GAINERS</span>
        </h3>
        <ul className={styles.performerList}>
          {gainers.map((stock, index) => (
            <li key={stock.id}>
              <span className={styles.performerRank}>{index + 1}</span>
              <span className={styles.performerName}>{stock.name}</span>
              <span className={`${styles.performerChange} ${styles.positive}`}>
                +{stock.changePercent}%
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className={`${styles.performerCard} ${styles.losers}`}>
        <h3>
          <span className={styles.emoji}>UNDERPERFORMERS</span>
        </h3>
        <ul className={styles.performerList}>
          {losers.map((stock, index) => (
            <li key={stock.id}>
              <span className={styles.performerRank}>{index + 1}</span>
              <span className={styles.performerName}>{stock.name}</span>
              <span className={`${styles.performerChange} ${styles.negative}`}>
                {stock.changePercent}%
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
