import { useRouter } from 'next/router'
import { Icon, Dropdown, Flag } from '@/components'
import { DDNextUIItem } from '@/components/dropdown/styled-components'
import { useLocales } from '@/hooks'

export const ToggleLang = () => {
  const { push, pathname, asPath, locale } = useRouter()
  const t = useLocales({ search: 'toggleLang', key: 'components' })
  
  const handleChangeLocale = (value) => {
    push(pathname, asPath, { locale: value })
  }

  return (
    <Dropdown
      show={<Icon name="translate" size="18px" />}
      initialValue={locale}
      onChange={handleChangeLocale}
    >
      <DDNextUIItem key="en" icon={<Flag locale="en" />} description={t['en']}>EN</DDNextUIItem>
      <DDNextUIItem key="es" icon={<Flag locale="es" />} description={t['es']}>ES</DDNextUIItem>
    </Dropdown>
  )
}
