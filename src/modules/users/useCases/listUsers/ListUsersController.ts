import { Request, Response } from "express";

import ListUsersUseCase from "./ListUsersUseCase";

class listUsersController {
  constructor(private listUsersUseCase: ListUsersUseCase) {}
  handle(request: Request, response: Response): Response {
    const users = this.listUsersUseCase.execute();
    return response.json(users);
  }
}

export default listUsersController;
