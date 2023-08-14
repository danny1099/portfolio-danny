import { useTheme } from 'next-themes'
import { Icon, Dropdown } from '@/components'
import { DDNextUIItem } from '@/components/dropdown/styled-components'
import { useLocales } from '@/hooks'

const altIconsTheme = {
  system: 'display',
  light: 'moon-stars',
  dark: 'brightness-high',
  undefined: 'display',
}

export const ToggleTheme = () => {
  const { theme, setTheme } = useTheme()
  const t = useLocales({ search: 'toggleTheme', key: 'components' })

  const handleChangeTheme = (value) => {
    setTheme(value)
  }

  return (
    <Dropdown
      show={<Icon name={altIconsTheme[theme]} />}
      initialValue={theme}
      onChange={handleChangeTheme}
    >
      <DDNextUIItem key="system" icon={<Icon name="display" />} >{t['system']}</DDNextUIItem>
      <DDNextUIItem key="light" icon={<Icon name="brightness-high" />} >{t['light']}</DDNextUIItem>
      <DDNextUIItem key="dark" icon={<Icon name="moon-stars" />}>{t['dark']}</DDNextUIItem>
    </Dropdown>
  )
}
