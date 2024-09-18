import { getOrdersFromDB } from '~/server/utils/orders'

export default defineEventHandler(async () => {
  const { data } = await getOrdersFromDB()

  return data
})
