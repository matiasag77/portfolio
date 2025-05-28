class Portfolio {
  constructor() {
    this.holdings = []; // [{ symbol, quantity }]
    this.targetAllocations = []; // [{ symbol, percentage }]
    this.stockRegistry = []; // [{ symbol, stock }]
  }

  registerStock(stock) {
    const existing = this.stockRegistry.find(s => s.symbol === stock.symbol);
    if (!existing) {
      this.stockRegistry.push({ symbol: stock.symbol, stock });
    }
  }

  addStock(symbol, quantity) {
    const reg = this.stockRegistry.find(s => s.symbol === symbol);
    if (!reg) throw new Error(`Stock ${symbol} no registrado`);

    const holding = this.holdings.find(h => h.symbol === symbol);
    if (holding) {
      holding.quantity += quantity;
    } else {
      this.holdings.push({ symbol, quantity });
    }
  }

  setTargetAllocations(allocations) {
    let total = 0;
    allocations.forEach(a => {
      total += a.percentage;
    });

    if (Math.abs(total - 1) > 0.01) {
      throw new Error('La suma de asignaciones debe ser igual a 1');
    }

    this.targetAllocations = allocations;
  }

  getTotalValue() {
    let total = 0;
    this.holdings.forEach(({ symbol, quantity }) => {
      const reg = this.stockRegistry.find(s => s.symbol === symbol);
      total += reg.stock.getCurrentPrice() * quantity;
    });
    return total;
  }

  getCurrentDistribution() {
    const totalValue = this.getTotalValue();
    const distribution = {};

    this.holdings.forEach(({ symbol, quantity }) => {
      const reg = this.stockRegistry.find(s => s.symbol === symbol);
      const value = reg.stock.getCurrentPrice() * quantity;
      distribution[symbol] = value / totalValue;
    });

    return distribution;
  }

  rebalance() {
    const totalValue = this.getTotalValue();
    const adjustments = {};

    this.targetAllocations.forEach(({ symbol, percentage }) => {
      const reg = this.stockRegistry.find(s => s.symbol === symbol);
      const holding = this.holdings.find(h => h.symbol === symbol);
      const quantity = holding ? holding.quantity : 0;

      const currentValue = reg.stock.getCurrentPrice() * quantity;
      const targetValue = totalValue * percentage;

      const diff = targetValue - currentValue;
      const sharesToTransact = Math.floor(diff / reg.stock.getCurrentPrice());

      if (sharesToTransact !== 0) {
        adjustments[symbol] = {
          action: sharesToTransact > 0 ? 'buy' : 'sell',
          shares: Math.abs(sharesToTransact)
        };
      }
    });

    return adjustments;
  }
}

export default Portfolio;
