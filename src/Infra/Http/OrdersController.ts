import { Application, Router, Context } from "oak";
import { IController } from "./IController.ts";

export class OrderController implements IController {
  private router: Router;

  constructor() {
    this.router = new Router();
    this.initializeRoutes();
  }

  registerRoutes(app: Application): void {
    app.use(this.router.routes());
    app.use(this.router.allowedMethods());
  }

  private handleGetOrders = async (ctx: Context) => {
    // Logic to retrieve orders
    ctx.response.body = "Get Orders";
  };

  private handleCreateOrder = async (ctx: Context) => {
    // Logic to create an order
    ctx.response.body = "Create Order";
  };

  private handleUpdateOrder = async (ctx: Context) => {
    // Logic to update an order
    ctx.response.body = "Update Order";
  };

  private handleDeleteOrder = async (ctx: Context) => {
    // Logic to delete an order
    ctx.response.body = "Delete Order";
  };

  private initializeRoutes(): void {
    this.router.get("/", this.handleGetOrders);
    this.router.get("/orders", this.handleGetOrders);
    this.router.post("/orders", this.handleCreateOrder);
    this.router.put("/orders/:id", this.handleUpdateOrder);
    this.router.delete("/orders/:id", this.handleDeleteOrder);
  }
}
