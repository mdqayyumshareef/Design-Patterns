import { IUser } from "./User";

export class UserBuilder {

  private user: IUser;

  constructor(firstName: string, lastName: string) {
    this.user = {
      firstName,
      lastName
    };
  }

  age(age: number): UserBuilder {
    this.user = { ...this.user, age };
    return this;
  }

  phone(phone: string): UserBuilder {
    this.user = { ...this.user, phone };
    return this;
  }

  email(email: string): UserBuilder {
    this.user = { ...this.user, email };
    return this;
  }

  build(): IUser {
    return this.user;
  }
}