import UsersRepository from "../../repositories/implementations/UsersRepository";
import DeleteUserController from "./DeleteUserController";
import DeleteUserUseCase from "./DeleteUserUseCase";

const usersRepository = UsersRepository.getInstance();

const deleteUserUseCase = new DeleteUserUseCase(usersRepository);

export const deleteUserController = new DeleteUserController(deleteUserUseCase);
