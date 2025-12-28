import { useState } from 'react';
import type { Stock, Country } from '../types';
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

function getCountryFlag(country: Country): string {
  const flags: Record<Country, string> = {
    US: '🇺🇸',
    JP: '🇯🇵',
    CN: '🇨🇳',
    KR: '🇰🇷',
    HK: '🇭🇰',
  };
  return flags[country];
}

// Generate random position for floating logos
function getRandomPosition(index: number, total: number) {
  const columns = Math.ceil(Math.sqrt(total));
  const row = Math.floor(index / columns);
  const col = index % columns;

  const baseX = (col / columns) * 80 + 10;
  const baseY = (row / Math.ceil(total / columns)) * 70 + 15;

  const offsetX = (Math.random() - 0.5) * 15;
  const offsetY = (Math.random() - 0.5) * 15;

  return {
    left: `${Math.max(5, Math.min(85, baseX + offsetX))}%`,
    top: `${Math.max(10, Math.min(80, baseY + offsetY))}%`,
  };
}

export function PortfolioTable({ stocks }: Props) {
  const [showTable, setShowTable] = useState(false);

  if (!showTable) {
    return (
      <div className={styles.floatingContainer}>
        <div className={styles.logosArea}>
          {stocks.map((stock, index) => {
            const position = getRandomPosition(index, stocks.length);
            const delay = index * 0.1;
            const duration = 3 + Math.random() * 2;

            return (
              <div
                key={stock.id}
                className={styles.floatingLogo}
                style={{
                  left: position.left,
                  top: position.top,
                  animationDelay: `${delay}s`,
                  animationDuration: `${duration}s`,
                }}
              >
                {stock.logoUrl ? (
                  <img src={stock.logoUrl} alt={stock.name} />
                ) : (
                  <span className={`${styles.floatingIcon} ${getCategoryClass(stock.category)}`}>
                    {stock.ticker}
                  </span>
                )}
              </div>
            );
          })}
        </div>
        <button className={styles.viewButton} onClick={() => setShowTable(true)}>
          パフォーマンスを見る
        </button>
      </div>
    );
  }

  return (
    <div className={styles.tableContainer}>
      <button className={styles.backButton} onClick={() => setShowTable(false)}>
        ロゴ表示に戻る
      </button>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>銘柄</th>
            <th>1月</th>
            <th>12月</th>
            <th>騰落率</th>
            <th>国</th>
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
                  <div className={styles.logoWrapper}>
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
                    {stock.isNew && <span className={styles.newBadge}>NEW</span>}
                    {stock.isDelete && <span className={styles.deleteBadge}>DELETE</span>}
                  </div>
                  <span className={styles.stockName}>{stock.name}</span>
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
              <td>
                <span className={styles.countryFlag}>{getCountryFlag(stock.country)}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
