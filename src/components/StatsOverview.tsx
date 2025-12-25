import type { StatOverview } from '../types';
import { useCountUp } from '../hooks/useCountUp';
import styles from './StatsOverview.module.css';

interface Props {
  stats: StatOverview[];
}

interface StatCardProps {
  stat: StatOverview;
  delay: number;
  position: 'first' | 'second' | 'third';
}

function StatCard({ stat, delay, position }: StatCardProps) {
  const animatedEndValue = useCountUp({
    end: stat.endValue,
    duration: 1500,
    delay,
  });

  const changePercent = ((stat.endValue - stat.startValue) / stat.startValue) * 100;
  const isPositive = changePercent >= 0;

  return (
    <div className={`${styles.statCard} ${styles[position]}`}>
      <div className={styles.statLabel}>{stat.label}</div>
      <div className={styles.statValue}>
        <span className={styles.startValue}>{stat.startValue.toLocaleString()}</span>
        <span className={styles.arrow}>→</span>
        <span className={styles.endValue}>{animatedEndValue.toLocaleString()}</span>
      </div>
      <div
        className={`${styles.statChange} ${
          isPositive ? styles.positive : styles.negative
        }`}
      >
        {isPositive ? '+' : ''}
        {changePercent.toFixed(1)}%
      </div>
    </div>
  );
}

const positions: ('first' | 'second' | 'third')[] = ['first', 'second', 'third'];

export function StatsOverview({ stats }: Props) {
  // 騰落率で降順ソート
  const sortedStats = [...stats].sort((a, b) => {
    const changeA = ((a.endValue - a.startValue) / a.startValue) * 100;
    const changeB = ((b.endValue - b.startValue) / b.startValue) * 100;
    return changeB - changeA;
  });

  return (
    <div className={styles.statsOverview}>
      {sortedStats.map((stat, index) => (
        <StatCard
          key={stat.label}
          stat={stat}
          delay={300}
          position={positions[index] || 'third'}
        />
      ))}
    </div>
  );
}
