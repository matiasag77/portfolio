import Stock from './stock.js';
import Portfolio from './portfolio.js';

const stock1 = new Stock('AAPL', { '2023-01-01': 150, '2024-01-01': 200 }); 
const stock2 = new Stock('TSLA', { '2023-01-01': 100, '2024-01-01': 300 });
const stock3 = new Stock('GOOGL', { '2023-01-01': 200, '2024-01-01': 250 });
const stock4 = new Stock('AMZN', { '2023-01-01': 300, '2024-01-01': 400 });
const stock5 = new Stock('MSFT', { '2023-01-01': 50, '2024-01-01': 100 });
const stock6 = new Stock('FB', { '2023-01-01': 150, '2024-01-01': 200 });
const stock7 = new Stock('NVDA', { '2023-01-01': 100, '2024-01-01': 300 });
const stock8 = new Stock('TSM', { '2023-01-01': 200, '2024-01-01': 250 });
const stock9 = new Stock('BABA', { '2023-01-01': 300, '2024-01-01': 400 });
const stock10 = new Stock('T', { '2023-01-01': 50, '2024-01-01': 100 });

const portfolio = new Portfolio();
portfolio.addStock(stock1);
portfolio.addStock(stock2);
portfolio.addStock(stock3);
portfolio.addStock(stock4);
portfolio.addStock(stock5);
portfolio.addStock(stock6);
portfolio.addStock(stock7);
portfolio.addStock(stock8);
portfolio.addStock(stock9);
portfolio.addStock(stock10);

console.log(portfolio.profit('2023-01-01', '2024-01-01')); 
console.log(portfolio.annualizedReturn('2023-01-01', '2024-01-01'));