import { Plan } from "./Plan";
import { PlanFactory } from "./PlanFactory";

const personalPlan: Plan = PlanFactory.getPlan('personal');
console.log(personalPlan.getCostPerMonthInUSD()); // 2
console.log(personalPlan.calculateBill(5)); // 10

const familyPlan: Plan = PlanFactory.getPlan('family');
console.log(familyPlan.getCostPerMonthInUSD()); // 5
console.log(familyPlan.calculateBill(5)); // 25

const businessPlan: Plan = PlanFactory.getPlan('business');
console.log(businessPlan.getCostPerMonthInUSD()); // 10
console.log(businessPlan.calculateBill(5)); // 50

