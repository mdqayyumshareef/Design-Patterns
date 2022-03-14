import { Plan } from './Plan';

export class PersonalPlan extends Plan {
  constructor() {
    super();
    this.setName('Personal');
    this.setCostPerMonthInUSD(2);
  }
}