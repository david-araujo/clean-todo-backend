import User from "../../models/User";
import IUsersRepository from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}
  execute({ name, email, password }: IRequest): User {
    const userExists = this.usersRepository.findByEmail(email);

    if (userExists) {
      throw new Error("Users already exists");
    }

    const user = this.usersRepository.create({
      name,
      email,
      password,
    });

    return user;
  }
}

export default CreateUserUseCase;
