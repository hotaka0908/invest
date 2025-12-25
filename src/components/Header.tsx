import styles from './Header.module.css';

interface Props {
  year: 2024 | 2025 | 2026;
  onYearChange: (year: 2024 | 2025 | 2026) => void;
}

const years: (2024 | 2025 | 2026)[] = [2024, 2025, 2026];

export function Header({ year, onYearChange }: Props) {
  const handleClick = () => {
    const currentIndex = years.indexOf(year);
    const nextIndex = (currentIndex + 1) % years.length;
    onYearChange(years[nextIndex]);
  };

  return (
    <header className={styles.header}>
      <button className={styles.yearBadge} onClick={handleClick}>
        FISCAL YEAR {year}
        <span className={styles.toggleHint}>Click to switch</span>
      </button>
      <h1 className={styles.title}>INVESTMENT PERFORMANCE</h1>
    </header>
  );
}
