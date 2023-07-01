import { Application } from "oak";
import { OrderController } from "./OrdersController.ts";
import { Injectosaurus, Inject } from "inject";

class App {
  private app: Application;
  private services: Injectosaurus;

  private constructor(@Inject("OrderController") private readonly orderController: OrderController) {
    this.app = new Application();    
    orderController.registerRoutes(this.app);
  }

  public static NewInstance() : App
  {
    const services = new Injectosaurus();
    App.configureServices(services);
    return services.resolve<App>("App");
  }

  private static configureServices(services: Injectosaurus) {
    services.register("OrderController", OrderController);
    services.register("App", App);
  }

  public start(port: number): void {
    this.app.listen({ port });
    console.log(`Server is running on port ${port}`);
  }
}

export { App };
