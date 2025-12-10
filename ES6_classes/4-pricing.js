import Currency from "./3-currency";

class Pricing {
  constructor(code, name) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (typeof code === 'string') this._code = code;
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    if (typeof currency === 'string') this._currency = currency;
  }

  displayFullCurrency() {
    return `${this.amount} (${this.currency})`;
  }
}

export default Currency;
