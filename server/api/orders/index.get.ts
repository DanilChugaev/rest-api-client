import { getOrdersFromDB } from '~/server/utils/orders'

export default defineEventHandler(async (event: any) => {
  try {
    const { id, name, description } = getQuery(event)
    const { data } = await getOrdersFromDB()

    if (!id && !name && !description) {
      return data
    }

    return data.filter(item => {
      if (item.id === parseInt(id) || item.name === name || item.description === description) {
        return true
      }

      return false
    })
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: error,
    })
  }
})
