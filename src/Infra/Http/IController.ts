import { Application } from "oak";

interface IController {
  registerRoutes(app: Application): void;
}

export { IController };
