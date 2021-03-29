import UsersRepository from "../../repositories/implementations/UsersRepository";

class DeleteUserUseCase {
  constructor(private usersRepository: UsersRepository) {}
  execute(id: string): void {
    const userExists = this.usersRepository.findById(id);
    if (!userExists) throw new Error("User not found");
    this.usersRepository.remove(id);
  }
}

export default DeleteUserUseCase;
