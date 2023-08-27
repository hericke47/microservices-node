import { Request, Response } from "express";
import { CreateProductUsecase } from "./create-product.usecase";

export class CreateProductController {
  constructor() {}

  async handle(request: Request, response: Response) {
    const useCase = new CreateProductUsecase();

    try {
      const result = await useCase.execute(request.body)

      return response.json(result)
    } catch(err) {
      return response.status(400).json(err)
    }
  }
}