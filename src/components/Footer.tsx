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
    </footer>
  );
}
