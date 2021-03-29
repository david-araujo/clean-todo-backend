import User from "../../models/User";
import IUsersRepository from "../../repositories/IUsersRepository";

class ListUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}
  execute(): User[] {
    const users = this.usersRepository.list();
    return users;
  }
}

export default ListUsersUseCase;
