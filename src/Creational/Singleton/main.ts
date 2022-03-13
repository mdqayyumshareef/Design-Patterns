import { Counter } from "./counter";

const counter = Counter.getInstance();
counter.increment();

console.log(counter.getCount()); // 1

const counter1 = Counter.getInstance();
const counter2 = Counter.getInstance();

console.log(counter1 === counter2); // true