import Stock from './src/stock.js';
import Portfolio from './src/portfolio.js';

const portfolio = new Portfolio();

const stocks = [
  new Stock('META', 250),
  new Stock('AAPL', 250),
  new Stock('MSFT', 250),
  new Stock('GOOG', 250)
];

const holdings = [
  { symbol: 'META', quantity: 3 },
  { symbol: 'AAPL', quantity: 3 },
  { symbol: 'MSFT', quantity: 3 },
  { symbol: 'GOOG', quantity: 3 }
]

const targetAllocations = [
  { symbol: 'META', percentage: 0.25 },
  { symbol: 'AAPL', percentage: 0.25 },
  { symbol: 'MSFT', percentage: 0.25 },
  { symbol: 'GOOG', percentage: 0.25 }
]

stocks.forEach(stock => portfolio.registerStock(stock));

holdings.forEach(({symbol, quantity}) => portfolio.addStock(symbol, quantity))

portfolio.setTargetAllocations(targetAllocations);

console.log('Valor total del portafolio:', portfolio.getTotalValue());
console.log('Distribución actual:', portfolio.getCurrentDistribution());
console.log('Rebalanceo necesario:', portfolio.rebalance());
