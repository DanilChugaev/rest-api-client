const linkElementId = 'theme-link'
const theme = 'blue'
const lightTheme = `lara-light-${theme}`
const darkTheme = `lara-dark-${theme}`

const isDark = ref(true)

export function useTheme() {
  const PrimeVue = usePrimeVue()

  const setDarkTheme = () => {
    PrimeVue.changeTheme(lightTheme, darkTheme, linkElementId, () => {})
  }

  const setLightTheme = () => {
    PrimeVue.changeTheme(darkTheme, lightTheme, linkElementId, () => {})
  }

  const changeTheme = () => {
    if (isDark.value) {
      setLightTheme()
    } else {
      setDarkTheme()
    }

    isDark.value = !isDark.value
  }

  return {
    isDark,
    changeTheme,
    setLightTheme,
    setDarkTheme,
  }
}
