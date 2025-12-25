import { useState } from 'react';
import {
  Header,
  StatsOverview,
  SectionTitle,
  PortfolioTable,
  PerformersGrid,
  Footer,
} from './components';
import { getDataForYear } from './data/portfolio';

function App() {
  const [year, setYear] = useState<2024 | 2025 | 2026>(2025);
  const data = getDataForYear(year);

  return (
    <>
      <div className="bg-animation"></div>
      <div className="grid-pattern"></div>

      <div className="container">
        <Header year={year} onYearChange={setYear} />

        <StatsOverview stats={data.statsOverview} />

        <SectionTitle title={`${data.portfolioLabel} PORTFOLIO`} />
        <PortfolioTable stocks={data.stocks} />

        <SectionTitle title="PERFORMANCE RANKING" />
        <PerformersGrid gainers={data.topGainers} losers={data.topLosers} />

        <Footer />
      </div>
    </>
  );
}

export default App;
