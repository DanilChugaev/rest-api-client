import { useToast } from 'primevue/usetoast'

type NotifyType = 'success' | 'info' | 'warn' | 'error' | 'secondary' | 'contrast'
type NotifyMessage = string

export function useNotifications() {
  const toast = useToast()
  const life = 3000

  const notify = (type: NotifyType, message: NotifyMessage) => {
    toast.add({
      severity: type,
      summary: message,
      life,
    })
  }

  const successNotify = (message: NotifyMessage) => notify('success', message)
  const infoNotify = (message: NotifyMessage) => notify('info', message)
  const warnNotify = (message: NotifyMessage) => notify('warn', message)
  const errorNotify = (message: NotifyMessage) => notify('error', message)
  const secondaryNotify = (message: NotifyMessage) => notify('secondary', message)
  const contrastNotify = (message: NotifyMessage) => notify('contrast', message)


  return {
    successNotify,
    infoNotify,
    warnNotify,
    errorNotify,
    secondaryNotify,
    contrastNotify,
  }
}
