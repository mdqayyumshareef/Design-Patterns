export abstract class Plan {
  private name = '';
  private costPerMonthInUSD = 0;

  setName(name: string): void {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  setCostPerMonthInUSD(costPerMonthInUSD: number): void {
    this.costPerMonthInUSD = costPerMonthInUSD;
  }

  getCostPerMonthInUSD(): number {
    return this.costPerMonthInUSD;
  }

  calculateBill(months: number): number {
    return this.costPerMonthInUSD * months;
  }
}