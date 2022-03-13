export class Counter {
  private static instance: Counter;
  private count: number;

  private constructor() {
    this.count = 0;
  }

  static getInstance() {
    if (!Counter.instance) {
      Counter.instance = new Counter();
    }
    return Counter.instance;
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  getCount() {
    return this.count;
  }
}