import { prismaClient } from "../../database/prismaClient"

type CreateOrderRequest = {
  customerId: string,
  items: [{
    productId: string,
    quantity: number
  }]
}

export class CreateOrderUseCase{
  constructor() {}

  async execute(data: CreateOrderRequest) {
    const order = await prismaClient.order.create({
      data: {
        customerId: data.customerId,
        status: "AGUARDANDO_PAGAMENTO",
        OrderItems: {
          createMany: {
            data: data.items
          }
        }
      }
    })

    return order
  }
}