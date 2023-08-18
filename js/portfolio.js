const Money = require("./money.js")
class Portfolio {
  constructor() {
    this.moneys = []
  }
  add(...moneys){
    this.moneys = [...this.moneys, ...moneys] // this.moneys.concat(moneys)
  }

  convert(money, currency){
    let eurToUSD = 1.2
    if(money.currency === currency){
      return money.amount
    }
    return money.amount * eurToUSD
  }

  evaluate(currency){
    let total = this.moneys.reduce( (sum, money) => {
      return sum + this.convert(money, currency)
    }, 0)
    return new Money(total, currency)
  }
}

module.exports = Portfolio