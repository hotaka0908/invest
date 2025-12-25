import type { Stock } from '../types';
import styles from './PortfolioTable.module.css';

interface Props {
  stocks: Stock[];
}

function formatNumber(num: number | null): string {
  if (num === null) return '—';
  return num.toLocaleString();
}

function getCategoryClass(category: Stock['category']): string {
  const classes: Record<Stock['category'], string> = {
    index: styles.iconIndex,
    tech: styles.iconTech,
    crypto: styles.iconCrypto,
    portfolio: styles.iconPortfolio,
  };
  return classes[category];
}

export function PortfolioTable({ stocks }: Props) {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>銘柄</th>
            <th>1月</th>
            <th>12月</th>
            <th>騰落率</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, index) => (
            <tr
              key={stock.id}
              className={stock.category === 'portfolio' ? styles.highlightRow : ''}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <td>
                <div className={styles.tickerName}>
                  {stock.logoUrl ? (
                    <img
                      src={stock.logoUrl}
                      alt={stock.name}
                      className={styles.logoIcon}
                    />
                  ) : (
                    <span className={`${styles.tickerIcon} ${getCategoryClass(stock.category)}`}>
                      {stock.ticker}
                    </span>
                  )}
                  <span>{stock.name}</span>
                  {stock.isNew && <span className={styles.newBadge}>NEW</span>}
                  {stock.isDelete && <span className={styles.deleteBadge}>DELETE</span>}
                </div>
              </td>
              <td>{formatNumber(stock.prices.jan)}</td>
              <td>{formatNumber(stock.prices.dec)}</td>
              <td>
                {stock.changePercent !== null ? (
                  <span
                    className={`${styles.changePill} ${
                      stock.changePercent >= 0 ? styles.positive : styles.negative
                    }`}
                  >
                    {stock.changePercent >= 0 ? '+' : ''}
                    {stock.changePercent}%
                  </span>
                ) : (
                  <span className={styles.changePill}>—</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
