import { Request, Response } from "express";
import { CreateOrderUseCase } from "./create-order.usecase";

export class CreateOrderController {
  constructor() {}

  async handle(request: Request, response: Response) {
    const useCase = new CreateOrderUseCase()

    try {
      const order = await useCase.execute(request.body)

      return response.json(order)
    } catch(err) {
      console.log(err)
      return response.status(400).json(err)
    }
  }
}