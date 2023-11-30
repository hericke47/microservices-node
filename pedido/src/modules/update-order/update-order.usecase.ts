import { prismaClient } from "../../database/prismaClient"
import { KafkaSendMessage } from "../../providers/kafka/producer"

type UpdateOrderRequest = {
  id: string,
  status: string
}

export class UpdateOrderUseCase {
  constructor() {}

  async execute(data: UpdateOrderRequest) {
    const orderUpdated = await prismaClient.order.update({
      where: {
        id: data.id
      },
      data: {
        status: data.status
      }
    })

    const kafkaSendMessage = new KafkaSendMessage();

    await kafkaSendMessage.execute('ORDER_STATUS', {
      customerId: orderUpdated.customerId,
      status: orderUpdated.status
    })
  }
}