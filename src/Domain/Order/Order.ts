import { OrderStatus } from "./OrderStatus.ts";

class Order {
  private _status: OrderStatus = OrderStatus.Pending;
  private _id: string = crypto.randomUUID();
  private _paid: boolean = false;
  private _approved: boolean = false;
  private readonly _orderDate: Date = new Date();

  constructor(
    private readonly _clientId: string,
    private readonly _carId: string,
    private _value: number
  ) {}

  get id(): string {
    return this._id;
  }

  get clientId(): string {
    return this._clientId;
  }

  get carId(): string {
    return this._carId;
  }

  get paid(): boolean {
    return this._paid;
  }

  set paid(value: boolean) {
    this._paid = value;
  }

  get approved(): boolean {
    return this._approved;
  }

  set approved(value: boolean) {
    this._approved = value;
  }

  get value(): number {
    return this._value;
  }

  set value(amount: number) {
    this._value = amount;
  }

  get orderDate(): Date {
    return this._orderDate;
  }

  get status(): OrderStatus {
    return this._status;
  }

  set status(status: OrderStatus) {
    this._status = status;
  }
}

export { Order };
