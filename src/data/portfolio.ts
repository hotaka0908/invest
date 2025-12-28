import type { Stock, StatOverview } from '../types';

// 2025年のデータ
export const stocks2025: Stock[] = [
  {
    id: 'nvidia',
    name: 'エヌビディア',
    ticker: 'NV',
    category: 'tech',
    country: 'US',
    prices: { jan: 140, jun: 148, sep: 187, dec: 190 },
    changePercent: 36,
    logoUrl: 'https://img.logo.dev/nvidia.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'apple',
    name: 'アップル',
    ticker: 'AP',
    category: 'tech',
    country: 'US',
    prices: { jan: 228, jun: 200, sep: 254, dec: 274 },
    changePercent: 20,
    isDelete: true,
    logoUrl: 'https://img.logo.dev/apple.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'tesla',
    name: 'テスラ',
    ticker: 'TS',
    category: 'tech',
    country: 'US',
    prices: { jan: 338, jun: 340, sep: 444, dec: 475 },
    changePercent: 41,
    logoUrl: 'https://img.logo.dev/tesla.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'google',
    name: 'グーグル',
    ticker: 'GG',
    category: 'tech',
    country: 'US',
    prices: { jan: 175, jun: 166, sep: 243, dec: 313 },
    changePercent: 79,
    logoUrl: 'https://img.logo.dev/google.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'microsoft',
    name: 'マイクロソフト',
    ticker: 'MS',
    category: 'tech',
    country: 'US',
    prices: { jan: 415, jun: 490, sep: 517, dec: 486 },
    changePercent: 17,
    isDelete: true,
    logoUrl: 'https://img.logo.dev/microsoft.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'meta',
    name: 'メタ',
    ticker: 'MT',
    category: 'tech',
    country: 'US',
    prices: { jan: 554, jun: 712, sep: 734, dec: 663 },
    changePercent: 20,
    logoUrl: 'https://img.logo.dev/meta.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'amazon',
    name: 'アマゾン',
    ticker: 'AM',
    category: 'tech',
    country: 'US',
    prices: { jan: 201, jun: 212, sep: 219, dec: 233 },
    changePercent: 16,
    logoUrl: 'https://img.logo.dev/amazon.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'berkshire',
    name: 'バークシャー',
    ticker: 'BK',
    category: 'index',
    country: 'US',
    prices: { jan: 472, jun: 493, sep: 502, dec: 501 },
    changePercent: 6,
    isDelete: true,
    logoUrl: 'https://img.logo.dev/berkshirehathaway.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'coinbase',
    name: 'コインベース',
    ticker: 'CB',
    category: 'crypto',
    country: 'US',
    prices: { jan: 325, jun: 344, sep: 337, dec: 237 },
    changePercent: -27,
    logoUrl: 'https://img.logo.dev/coinbase.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'arm',
    name: 'アーム',
    ticker: 'AR',
    category: 'tech',
    country: 'US',
    prices: { jan: 128, jun: 156, sep: 141, dec: 110 },
    changePercent: -14,
    logoUrl: 'https://img.logo.dev/arm.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'netflix',
    name: 'ネットフリックス',
    ticker: 'NF',
    category: 'tech',
    country: 'US',
    prices: { jan: 84, jun: 1279, sep: 1198, dec: 94 },
    changePercent: 12,
    logoUrl: 'https://img.logo.dev/netflix.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'bitcoin',
    name: 'ビットコイン',
    ticker: 'BT',
    category: 'crypto',
    country: 'US',
    prices: { jan: 1590, jun: 1551, sep: 1711, dec: 1374 },
    changePercent: -14,
    isNew: true,
    weight: 0.93,
    logoUrl: 'https://img.logo.dev/bitcoin.org?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'oracle',
    name: 'オラクル',
    ticker: 'OR',
    category: 'tech',
    country: 'US',
    prices: { jan: 169, jun: 215, sep: 281, dec: 198 },
    changePercent: 17,
    isNew: true,
    weight: 1,
    logoUrl: 'https://img.logo.dev/oracle.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'circle',
    name: 'サークル',
    ticker: 'CR',
    category: 'crypto',
    country: 'US',
    prices: { jan: 103, jun: 222, sep: 132, dec: 81 },
    changePercent: -21,
    isNew: true,
    weight: 0.57,
    logoUrl: 'https://img.logo.dev/circle.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'duolingo',
    name: 'デュオリンゴ',
    ticker: 'DU',
    category: 'tech',
    country: 'US',
    prices: { jan: 191, jun: null, sep: null, dec: 182 },
    changePercent: -5,
    isNew: true,
    weight: 0.07,
    logoUrl: 'https://img.logo.dev/duolingo.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'xiaomi',
    name: 'シャオミ',
    ticker: 'XI',
    category: 'tech',
    country: 'CN',
    prices: { jan: 40, jun: null, sep: null, dec: 39 },
    changePercent: -3,
    isNew: true,
    weight: 0.07,
    logoUrl: 'https://img.logo.dev/mi.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'alibaba',
    name: 'アリババ',
    ticker: 'AL',
    category: 'tech',
    country: 'CN',
    prices: { jan: 157, jun: null, sep: null, dec: 152 },
    changePercent: -3,
    isNew: true,
    weight: 0.07,
    logoUrl: 'https://img.logo.dev/alibaba.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'tencent',
    name: 'テンセント',
    ticker: 'TE',
    category: 'tech',
    country: 'CN',
    prices: { jan: 614, jun: null, sep: null, dec: 603 },
    changePercent: -2,
    isNew: true,
    weight: 0.07,
    logoUrl: 'https://img.logo.dev/tencent.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'samsung',
    name: 'サムスン',
    ticker: 'SS',
    category: 'tech',
    country: 'KR',
    prices: { jan: 100800, jun: null, sep: null, dec: 117000 },
    changePercent: 16,
    isNew: true,
    weight: 0.07,
    logoUrl: 'https://img.logo.dev/samsung.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'airbnb',
    name: 'エアビーアンドビー',
    ticker: 'AB',
    category: 'tech',
    country: 'US',
    prices: { jan: 136, jun: null, sep: null, dec: 136 },
    changePercent: 0,
    isNew: true,
    weight: 0,
    logoUrl: 'https://img.logo.dev/airbnb.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
];

// 2024年のデータ
export const stocks2024: Stock[] = [
  {
    id: 'nvidia',
    name: 'エヌビディア',
    ticker: 'NV',
    category: 'tech',
    country: 'US',
    prices: { jan: 496, jun: null, sep: null, dec: 1401 },
    changePercent: 182,
    logoUrl: 'https://img.logo.dev/nvidia.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'apple',
    name: 'アップル',
    ticker: 'AP',
    category: 'tech',
    country: 'US',
    prices: { jan: 196, jun: null, sep: null, dec: 228 },
    changePercent: 16,
    logoUrl: 'https://img.logo.dev/apple.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'tesla',
    name: 'テスラ',
    ticker: 'TS',
    category: 'tech',
    country: 'US',
    prices: { jan: 257, jun: null, sep: null, dec: 338 },
    changePercent: 32,
    logoUrl: 'https://img.logo.dev/tesla.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'google',
    name: 'グーグル',
    ticker: 'GG',
    category: 'tech',
    country: 'US',
    prices: { jan: 138, jun: null, sep: null, dec: 175 },
    changePercent: 27,
    logoUrl: 'https://img.logo.dev/google.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'microsoft',
    name: 'マイクロソフト',
    ticker: 'MS',
    category: 'tech',
    country: 'US',
    prices: { jan: 373, jun: null, sep: null, dec: 415 },
    changePercent: 11,
    logoUrl: 'https://img.logo.dev/microsoft.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'meta',
    name: 'メタ',
    ticker: 'MT',
    category: 'tech',
    country: 'US',
    prices: { jan: 350, jun: null, sep: null, dec: 554 },
    changePercent: 58,
    logoUrl: 'https://img.logo.dev/meta.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'amazon',
    name: 'アマゾン',
    ticker: 'AM',
    category: 'tech',
    country: 'US',
    prices: { jan: 153, jun: null, sep: null, dec: 201 },
    changePercent: 31,
    logoUrl: 'https://img.logo.dev/amazon.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'berkshire',
    name: 'バークシャー',
    ticker: 'BK',
    category: 'index',
    country: 'US',
    prices: { jan: 361, jun: null, sep: null, dec: 472 },
    changePercent: 31,
    logoUrl: 'https://img.logo.dev/berkshirehathaway.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'coinbase',
    name: 'コインベース',
    ticker: 'CB',
    category: 'crypto',
    country: 'US',
    prices: { jan: 161, jun: null, sep: null, dec: 325 },
    changePercent: 102,
    logoUrl: 'https://img.logo.dev/coinbase.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'arm',
    name: 'アーム',
    ticker: 'AR',
    category: 'tech',
    country: 'US',
    prices: { jan: 174, jun: null, sep: null, dec: 128 },
    changePercent: -26,
    isNew: true,
    logoUrl: 'https://img.logo.dev/arm.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'netflix',
    name: 'ネットフリックス',
    ticker: 'NF',
    category: 'tech',
    country: 'US',
    prices: { jan: 648, jun: null, sep: null, dec: 847 },
    changePercent: 31,
    isNew: true,
    logoUrl: 'https://img.logo.dev/netflix.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
];

// 2026年のデータ（テンプレート - 後で更新可能）
export const stocks2026: Stock[] = [
  {
    id: 'nvidia',
    name: 'エヌビディア',
    ticker: 'NV',
    category: 'tech',
    country: 'US',
    prices: { jan: 190, jun: null, sep: null, dec: null },
    changePercent: null,
    logoUrl: 'https://img.logo.dev/nvidia.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'tesla',
    name: 'テスラ',
    ticker: 'TS',
    category: 'tech',
    country: 'US',
    prices: { jan: 475, jun: null, sep: null, dec: null },
    changePercent: null,
    logoUrl: 'https://img.logo.dev/tesla.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'google',
    name: 'グーグル',
    ticker: 'GG',
    category: 'tech',
    country: 'US',
    prices: { jan: 313, jun: null, sep: null, dec: null },
    changePercent: null,
    logoUrl: 'https://img.logo.dev/google.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'meta',
    name: 'メタ',
    ticker: 'MT',
    category: 'tech',
    country: 'US',
    prices: { jan: 663, jun: null, sep: null, dec: null },
    changePercent: null,
    logoUrl: 'https://img.logo.dev/meta.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'amazon',
    name: 'アマゾン',
    ticker: 'AM',
    category: 'tech',
    country: 'US',
    prices: { jan: 233, jun: null, sep: null, dec: null },
    changePercent: null,
    logoUrl: 'https://img.logo.dev/amazon.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'coinbase',
    name: 'コインベース',
    ticker: 'CB',
    category: 'crypto',
    country: 'US',
    prices: { jan: 237, jun: null, sep: null, dec: null },
    changePercent: null,
    logoUrl: 'https://img.logo.dev/coinbase.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'arm',
    name: 'アーム',
    ticker: 'AR',
    category: 'tech',
    country: 'US',
    prices: { jan: 110, jun: null, sep: null, dec: null },
    changePercent: null,
    logoUrl: 'https://img.logo.dev/arm.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'netflix',
    name: 'ネットフリックス',
    ticker: 'NF',
    category: 'tech',
    country: 'US',
    prices: { jan: 94, jun: null, sep: null, dec: null },
    changePercent: null,
    logoUrl: 'https://img.logo.dev/netflix.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'bitcoin',
    name: 'ビットコイン',
    ticker: 'BT',
    category: 'crypto',
    country: 'US',
    prices: { jan: 1374, jun: null, sep: null, dec: null },
    changePercent: null,
    logoUrl: 'https://img.logo.dev/bitcoin.org?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'oracle',
    name: 'オラクル',
    ticker: 'OR',
    category: 'tech',
    country: 'US',
    prices: { jan: 198, jun: null, sep: null, dec: null },
    changePercent: null,
    logoUrl: 'https://img.logo.dev/oracle.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'circle',
    name: 'サークル',
    ticker: 'CR',
    category: 'crypto',
    country: 'US',
    prices: { jan: 81, jun: null, sep: null, dec: null },
    changePercent: null,
    logoUrl: 'https://img.logo.dev/circle.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'duolingo',
    name: 'デュオリンゴ',
    ticker: 'DU',
    category: 'tech',
    country: 'US',
    prices: { jan: 182, jun: null, sep: null, dec: null },
    changePercent: null,
    logoUrl: 'https://img.logo.dev/duolingo.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'xiaomi',
    name: 'シャオミ',
    ticker: 'XI',
    category: 'tech',
    country: 'CN',
    prices: { jan: 39, jun: null, sep: null, dec: null },
    changePercent: null,
    logoUrl: 'https://img.logo.dev/mi.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'alibaba',
    name: 'アリババ',
    ticker: 'AL',
    category: 'tech',
    country: 'CN',
    prices: { jan: 152, jun: null, sep: null, dec: null },
    changePercent: null,
    logoUrl: 'https://img.logo.dev/alibaba.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'tencent',
    name: 'テンセント',
    ticker: 'TE',
    category: 'tech',
    country: 'CN',
    prices: { jan: 603, jun: null, sep: null, dec: null },
    changePercent: null,
    logoUrl: 'https://img.logo.dev/tencent.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'samsung',
    name: 'サムスン',
    ticker: 'SS',
    category: 'tech',
    country: 'KR',
    prices: { jan: 117000, jun: null, sep: null, dec: null },
    changePercent: null,
    logoUrl: 'https://img.logo.dev/samsung.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'fastretailing',
    name: 'ファーストリテイリング',
    ticker: 'FR',
    category: 'tech',
    country: 'JP',
    prices: { jan: 57270, jun: null, sep: null, dec: null },
    changePercent: null,
    isNew: true,
    logoUrl: 'https://img.logo.dev/fastretailing.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'softbank',
    name: 'ソフトバンクグループ',
    ticker: 'SB',
    category: 'tech',
    country: 'JP',
    prices: { jan: 17450, jun: null, sep: null, dec: null },
    changePercent: null,
    isNew: true,
    logoUrl: 'https://img.logo.dev/softbank.jp?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'nintendo',
    name: '任天堂',
    ticker: 'NT',
    category: 'tech',
    country: 'JP',
    prices: { jan: 10795, jun: null, sep: null, dec: null },
    changePercent: null,
    isNew: true,
    logoUrl: 'https://img.logo.dev/nintendo.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'sony',
    name: 'ソニー',
    ticker: 'SN',
    category: 'tech',
    country: 'JP',
    prices: { jan: 4045, jun: null, sep: null, dec: null },
    changePercent: null,
    isNew: true,
    logoUrl: 'https://img.logo.dev/sony.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'panpacific',
    name: 'パンパシフィック',
    ticker: 'PP',
    category: 'tech',
    country: 'JP',
    prices: { jan: 943, jun: null, sep: null, dec: null },
    changePercent: null,
    isNew: true,
    logoUrl: 'https://img.logo.dev/ppih.co.jp?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
  {
    id: 'airbnb',
    name: 'エアビーアンドビー',
    ticker: 'AB',
    category: 'tech',
    country: 'US',
    prices: { jan: 136, jun: null, sep: null, dec: null },
    changePercent: null,
    logoUrl: 'https://img.logo.dev/airbnb.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ',
  },
];

// 加重平均騰落率を計算する関数
function calculatePortfolioStats(stocks: Stock[]) {
  const { totalWeightedReturn, totalWeight } = stocks.reduce(
    (acc, s) => {
      const jan = s.prices.jan ?? 0;
      const dec = s.prices.dec ?? 0;
      if (jan === 0) return acc;
      const returnRate = (dec - jan) / jan;
      const weight = s.weight !== undefined ? s.weight : (s.isNew ? 0.5 : 1);
      return {
        totalWeightedReturn: acc.totalWeightedReturn + returnRate * weight,
        totalWeight: acc.totalWeight + weight,
      };
    },
    { totalWeightedReturn: 0, totalWeight: 0 }
  );

  const averageReturn = totalWeightedReturn / totalWeight;
  const portfolioStart = 10000;
  const portfolioEnd = Math.round(portfolioStart * (1 + averageReturn));

  return { portfolioStart, portfolioEnd };
}

// 2025年のstatsOverview
const stats2025 = calculatePortfolioStats(stocks2025);
export const statsOverview2025: StatOverview[] = [
  { label: 'ホタP20', startValue: stats2025.portfolioStart, endValue: stats2025.portfolioEnd },
  { label: 'S&P 500', startValue: 5893, endValue: 6930 },
  { label: '日経平均', startValue: 38403, endValue: 50750 },
];

// 2024年のstatsOverview
const stats2024 = calculatePortfolioStats(stocks2024);
export const statsOverview2024: StatOverview[] = [
  { label: 'ホタP11', startValue: stats2024.portfolioStart, endValue: stats2024.portfolioEnd },
  { label: 'S&P 500', startValue: 4770, endValue: 5893 },
  { label: '日経平均', startValue: 33288, endValue: 38403 },
];

// 2026年のstatsOverview（テンプレート）
const stats2026 = calculatePortfolioStats(stocks2026);
export const statsOverview2026: StatOverview[] = [
  { label: 'ホタP22', startValue: stats2026.portfolioStart, endValue: stats2026.portfolioEnd },
  { label: 'S&P 500', startValue: 6910, endValue: 6910 },
  { label: '日経平均', startValue: 50345, endValue: 50345 },
];

// トップゲイナー/ルーザーを取得する関数
export function getTopGainers(stocks: Stock[]) {
  return stocks
    .filter((s) => s.changePercent !== null && s.changePercent > 0)
    .sort((a, b) => (b.changePercent ?? 0) - (a.changePercent ?? 0))
    .slice(0, 5);
}

export function getTopLosers(stocks: Stock[]) {
  return stocks
    .filter((s) => s.changePercent !== null && s.changePercent < 0)
    .sort((a, b) => (a.changePercent ?? 0) - (b.changePercent ?? 0))
    .slice(0, 4);
}

// 年ごとのデータを取得する関数
export function getDataForYear(year: 2024 | 2025 | 2026) {
  if (year === 2024) {
    return {
      stocks: stocks2024,
      statsOverview: statsOverview2024,
      topGainers: getTopGainers(stocks2024),
      topLosers: getTopLosers(stocks2024),
      portfolioLabel: 'ホタP11',
    };
  }
  if (year === 2026) {
    return {
      stocks: stocks2026,
      statsOverview: statsOverview2026,
      topGainers: getTopGainers(stocks2026),
      topLosers: getTopLosers(stocks2026),
      portfolioLabel: 'ホタP22',
    };
  }
  return {
    stocks: stocks2025,
    statsOverview: statsOverview2025,
    topGainers: getTopGainers(stocks2025),
    topLosers: getTopLosers(stocks2025),
    portfolioLabel: 'ホタP20',
  };
}

// 後方互換性のためのエクスポート
export const stocks = stocks2025;
export const statsOverview = statsOverview2025;
export const topGainers = getTopGainers(stocks2025);
export const topLosers = getTopLosers(stocks2025);
