import { Plan } from './Plan';

export class FamilyPlan extends Plan {
  constructor() {
    super();
    this.setName('Family');
    this.setCostPerMonthInUSD(5);
  }
}