const Money = require("./money.js")
class Portfolio {
  constructor() {
    this.moneys = []
  }
  add(...moneys){
    this.moneys = [...this.moneys, ...moneys] // this.moneys.concat(moneys)
  }

  evaluate(currency){
    let total = this.moneys.reduce( (sum, money) => {
      return sum + money.amount
    }, 0)
    return new Money(total, currency)
  }
}

module.exports = Portfolio