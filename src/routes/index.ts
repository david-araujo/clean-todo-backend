import { Router } from "express";

import projectsRouter from "./projects.routes";
import todosRouter from "./todos.routes";
import usersRouter from "./users.routes";

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/projects", projectsRouter);
routes.use("/todos", todosRouter);

export default routes;
