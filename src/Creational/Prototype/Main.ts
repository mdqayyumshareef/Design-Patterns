import { Employee } from "./Employee";

const employee1 = new Employee(1, "John Doe", "12345678", "johndoe@gmail.com");

console.log(JSON.stringify(employee1));

const employee2 = employee1.clone();

console.log(employee1 === employee2); // false
