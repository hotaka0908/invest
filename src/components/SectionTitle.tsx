import styles from './SectionTitle.module.css';

interface Props {
  title: string;
}

export function SectionTitle({ title }: Props) {
  return (
    <div className={styles.sectionTitle}>
      <h2>{title}</h2>
      <div className={styles.line}></div>
    </div>
  );
}
