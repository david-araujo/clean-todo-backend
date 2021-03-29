import UsersRepository from "../../repositories/implementations/UsersRepository";
import ListUsersController from "./ListUsersController";
import ListUsersUseCase from "./ListUsersUseCase";

const usersRepository = UsersRepository.getInstance();

const listUsersUseCase = new ListUsersUseCase(usersRepository);

export const listUsersController = new ListUsersController(listUsersUseCase);
