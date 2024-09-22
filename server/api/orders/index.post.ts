import { getOrdersFromDB } from '~/server/utils/orders'

export default defineEventHandler(async (event: any) => {
  const body = await readBody(event)
  const { data } = await getOrdersFromDB()

  return [...data, body]
})
