import { Prototype } from "./Prototype";

export class Employee implements Prototype {

  private id: number;
  private name: string;
  private phone: string;
  private email: string;

  constructor(id: number, name: string, phone: string, email: string) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.email = email;
  }

  clone(): Prototype {
    return new Employee(this.id, this.name, this.phone, this.email);
  }
}