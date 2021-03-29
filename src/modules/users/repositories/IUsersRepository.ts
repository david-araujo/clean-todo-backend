import User from "../models/User";

export interface IUserDTO {
  name: string;
  email: string;
  password: string;
}

interface IUserRepository {
  list(): User[];
  create({ name, email, password }: IUserDTO): User;
  findByEmail(email: string): User;
  findById(id: string): User;
  remove(id: string): void;
}

export default IUserRepository;
