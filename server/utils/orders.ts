import type { IResponse } from '~/server/types/requests'
import type { IOrder } from '~/server/types/orders'
import { TIMEOUT_DELAY } from '~/server/constants'

export function getOrdersFromDB(): Promise<IResponse<IOrder>> {
  const result: IResponse<IOrder> = {
    data: [
      {
        id: 1,
        name: 'name_1',
        description: 'description_1',
      },
      {
        id: 2,
        name: 'name_2',
        description: 'description_2',
      },
      {
        id: 3,
        name: 'name_3',
        description: 'description_3',
      },
      {
        id: 4,
        name: 'name_4',
        description: 'description_4',
      },
      {
        id: 5,
        name: 'name_5',
        description: 'description_5',
      },
    ],
  }

  return new Promise(resolve => {
    setTimeout(() => resolve(result), TIMEOUT_DELAY)
  })
}
