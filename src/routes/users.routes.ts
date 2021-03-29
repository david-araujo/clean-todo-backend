import { Router, Request, Response } from "express";

import { createUserController } from "../modules/users/useCases/createUser";
import { deleteUserController } from "../modules/users/useCases/deleteUser";
import { listUsersController } from "../modules/users/useCases/listUsers";

const usersRouter = Router();

usersRouter.post("/", (request: Request, response: Response) =>
  createUserController.handle(request, response)
);

usersRouter.get("/", (request: Request, response: Response) =>
  listUsersController.handle(request, response)
);

usersRouter.delete("/:id", (request: Request, response: Response) =>
  deleteUserController.handle(request, response)
);

export default usersRouter;
