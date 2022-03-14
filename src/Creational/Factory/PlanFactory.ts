import { Plan } from "./Plan";
import { PersonalPlan } from "./PersonalPlan";
import { BusinessPlan } from "./BusinessPlan";
import { FamilyPlan } from "./FamilyPlan";

export class PlanFactory {
  static getPlan(planType: string): Plan {
    switch (planType) {
      case 'personal':
        return new PersonalPlan();
      case 'business':
        return new BusinessPlan();
      case 'family':
        return new FamilyPlan();
      default:
        throw new Error('Invalid plan type');
    }
  }
}