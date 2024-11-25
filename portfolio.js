class Portfolio {
    constructor() { 
      this.stocks = []; 
    }
    
    addStock(stock) { 
      this.stocks.push(stock); 
    }
  
    profit(startDate, endDate) {
      let profit = 0;
      this.stocks.forEach(stock => {
        const startPrice = stock.price(startDate);
        const endPrice = stock.price(endDate);
        profit += (endPrice - startPrice);
      });
      return profit;
    }

    // Ejemplo de uso:
    // stock a: { '2023-01-01': 100 } -> { '2024-01-01': 150 }
    // stock b: { '2023-01-01': 200 } -> { '2024-01-01': 300 }
    // calculo profit: (150 - 100) + (300 - 200) = 150
  
    annualizedReturn(startDate, endDate) {
      const initial = this.stocks.reduce((sum, stock) => sum + stock.price(startDate), 0);
      const final = this.stocks.reduce((sum, stock) => sum + stock.price(endDate), 0);
      const years = (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24 * 365);
      return ((final / initial) ** (1 / years)) - 1;
    }
  }

  export default Portfolio;