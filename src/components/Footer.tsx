import styles from './Footer.module.css';

export function Footer() {
  const today = new Date().toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <footer className={styles.footer}>
      <p className={styles.updateTime}>最終更新: {today}</p>
      <p>※ 価格単位：株価はUSD、Bitcoin は100ドル単位、指数は各通貨基準</p>
    </footer>
  );
}
