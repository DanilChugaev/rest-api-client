import { ILoggerContext } from './types/logger'
import { useNotifications } from './useNotifications'

export function useLogger() {
  const { errorNotify, warnNotify, infoNotify } = useNotifications()
  const fatalLog = (error: string) => {
    throw createError(error)
  }

  const errorLog = (error: string | Error, context?: ILoggerContext) => {
    console.error(error, context)

    errorNotify(error.data?.message || error)
  }

  const warnLog = (message: string, context?: ILoggerContext) => {
    console.warn(message, context)

    warnNotify(message)
  }

  const infoLog = (message: string, context?: ILoggerContext) => {
    console.info(message, context)

    infoNotify(message)
  }


  return {
    fatalLog,
    errorLog,
    warnLog,
    infoLog,
  }
}
