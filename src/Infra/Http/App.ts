import { Application } from "oak";
import { OrderController } from "./OrdersController.ts";
import { Bootstrapped } from "inject";

@Bootstrapped()
class App {
  private app: Application;

  constructor(private readonly orderController: OrderController) {
    this.app = new Application();
    orderController.registerRoutes(this.app);
  }

  public start(port: number): void {
    this.app.listen({ port });
    console.log(`Server is running on port ${port}`);
  }
}

export { App };
