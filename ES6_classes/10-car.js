class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.car]() {
    return this;
  }

  cloneCar() {
    const car = this.constructor[Symbol.car];
    return new car();
  }
}

export default Car;