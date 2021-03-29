import User from "../../models/User";
import IUserRepository, { IUserDTO } from "../IUsersRepository";

class UsersRepository implements IUserRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }
    return UsersRepository.INSTANCE;
  }

  create({ name, email, password }: IUserDTO): User {
    const user = new User();

    Object.assign(user, {
      name,
      email,
      password,
    });

    this.users.push(user);

    return user;
  }

  list(): User[] {
    return this.users;
  }

  findByEmail(email: string): User {
    const user = this.users.find((user) => email === user.email);
    return user;
  }

  findById(id: string): User {
    const user = this.users.find((user) => id === user.id);
    return user;
  }

  remove(id: string): void {
    const indexUser = this.users.findIndex((user) => id === user.id);
    if (indexUser >= 0) this.users.splice(indexUser, 1);
  }
}

export default UsersRepository;
