import { kafka } from "."
import { prismaClient } from "../../database/prismaClient"

type ProductConsumer = {
  code: string,
  id: string
}

type CustomerConsumer = {
  email: string,
  id: string
}

export async function initializeConsumer(){
  const consumer = kafka.consumer({ groupId: "ORDER_CONSUMER_GROUP" })

  await consumer.connect()

  await consumer.subscribe({ topics: ["PRODUCT_CREATED", "CUSTOMER_CREATED"], fromBeginning: true })

  await consumer.run({
    eachMessage: async ({ message, topic }) => {
      const messageToString = message.value!.toString()

      if(topic === "PRODUCT_CREATED") {
        const product = JSON.parse(messageToString) as ProductConsumer

        console.log(product)

        await prismaClient.product.create({
          data: {
            externalId: product.id,
            code: product.code
          }
        })
      } else if(topic === "CUSTOMER_CREATED") {
        const customer = JSON.parse(messageToString) as CustomerConsumer

        console.log(customer)

        await prismaClient.customer.create({
          data: {
            externalId: customer.id,
            email: customer.email
          }
        }).catch(err => console.log(err))
      }
    },
  })
}

initializeConsumer()