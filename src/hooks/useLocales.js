import { useRouter } from 'next/router'
import { EN, ES } from '@/locales'

export const useLocales = ({ search, key = 'route' }) => {
  const { locale } = useRouter()
  const t = locale === 'en' ? EN : ES
  return key !== 'components'
    ? t[search]
    : search === ''
    ? t.components
    : t.components[search]
}
