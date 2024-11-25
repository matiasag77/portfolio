class Stock {
    constructor(symbol, prices) {
      this.symbol = symbol;
      this.prices = prices;  // { date: price }
    }
  
    price(date) { return this.prices[date] || 0;  } // Default 0
  }

 export default Stock;