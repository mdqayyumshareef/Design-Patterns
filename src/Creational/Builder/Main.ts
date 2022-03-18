import { UserBuilder } from "./UserBuilder";

const user = new UserBuilder("John", "Doe")
  .age(20)
  .phone("555-555-5555")
  .email("johndoe@gmail.com")
  .build();

console.log(JSON.stringify(user));