class Stock {
  constructor(symbol, currentPrice) {
    this.symbol = symbol;
    this._currentPrice = currentPrice;
  }

  getCurrentPrice() {
    return this._currentPrice;
  }

  setCurrentPrice(newPrice) {
    this._currentPrice = newPrice;
  }
}

export default Stock;
