import { Plan } from './Plan'

export class BusinessPlan extends Plan {
  constructor() {
    super();
    this.setName('Business');
    this.setCostPerMonthInUSD(10);
  }
}