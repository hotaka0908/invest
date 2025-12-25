export type StockCategory = 'index' | 'tech' | 'crypto' | 'portfolio';

export interface PriceData {
  jan: number | null;
  jun: number | null;
  sep: number | null;
  dec: number | null;
}

export interface Stock {
  id: string;
  name: string;
  ticker: string;
  category: StockCategory;
  prices: PriceData;
  changePercent: number | null;
  isNew?: boolean;
  isDelete?: boolean;
  logoUrl?: string;
}

export interface StatOverview {
  label: string;
  startValue: number;
  endValue: number;
}
