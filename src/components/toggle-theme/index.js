import { useTheme } from 'next-themes'
import { useState, useEffect, useMemo } from 'react'
import { DDNextUIItem } from '@/components/dropdown/styled-components'
import { Icon, Dropdown } from '@/components'
import { useLocales } from '@/hooks'

const menuItems = [
  {
    key: 'system',
    name: 'system',
    icon: <Icon name="display" />
  },
  {
    key: 'light',
    name: 'light',
    icon: <Icon name="brightness-high" />
  },
  {
    key: 'dark',
    name: 'dark',
    icon: <Icon name="moon-stars" />
  }
]

const altIconsTheme = {
  system: 'display',
  light: 'moon-stars',
  dark: 'brightness-high'
}

export const ToggleTheme = () => {
  const t = useLocales({ search: 'toggleTheme', key: 'components' })
  const { theme, setTheme } = useTheme()
  const [selected, setSelected] = useState(new Set([theme]))

  const value = useMemo(
    () => Array.from(selected).join(', ').replaceAll('_', ' '),
    [selected]
  )

  useEffect(() => {
    setTheme(value)
  }, [selected])

  return (
    <Dropdown
      show={<Icon name={altIconsTheme[theme]} />}
      selected={selected}
      onChange={setSelected}
      items={menuItems}
    >
      {({ key, name, icon }) => (
        <DDNextUIItem key={key} icon={icon}>
          {t[name]}
        </DDNextUIItem>
      )}
    </Dropdown>
  )
}
