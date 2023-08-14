import { useState, useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'
import { DDNextUIItem } from '@/components/dropdown/styled-components'
import { Icon, Dropdown, Flag } from '@/components'
import { useLocales } from '@/hooks'

const menuItems = [
  {
    key: 'en',
    name: 'EN',
    icon: <Flag locale="en" />,
    description: 'en'
  },
  {
    key: 'es',
    name: 'ES',
    icon: <Flag locale="es" />,
    description: 'es'
  }
]

export const ToggleLang = () => {
  const t = useLocales({ search: 'toggleLang', key: 'components' })
  const { push, pathname, asPath, locale } = useRouter()
  const [selected, setSelected] = useState(new Set([locale]))

  const value = useMemo(
    () => Array.from(selected).join(', ').replaceAll('_', ' '),
    [selected]
  )

  useEffect(() => {
    if (value !== locale) handleChangeLocale()
  }, [selected])

  const handleChangeLocale = () => {
    push(pathname, asPath, { locale: value })
  }

  return (
    <Dropdown
      show={<Icon name="translate" size="18px" />}
      selected={selected}
      onChange={setSelected}
      items={menuItems}
    >
      {({ key, name, icon, description }) => (
        <DDNextUIItem key={key} icon={icon} description={t[description]}>
          {name}
        </DDNextUIItem>
      )}
    </Dropdown>
  )
}
