import Link from 'next/link'
import { useLocales } from '@/hooks'
import { publicRoutes } from '@/routes'
import styles from './styles.module.scss'

const navItems = [
  {
    id: 1,
    name: 'work',
    path: `${publicRoutes.WORK}`
  },
  {
    id: 2,
    name: 'about',
    path: `${publicRoutes.ABOUT}`
  },
  {
    id: 3,
    name: 'services',
    path: `${publicRoutes.SERVICES}`
  }
]

export const NavItems = () => {
  const t = useLocales({ search: 'navbar', key: 'components' })

  return (
    <nav className={styles.wrapper}>
      {navItems.map(({ id, path, name }) => {
        return (
          <Link key={id} href={path}>
            {t[name]}
          </Link>
        )
      })}
    </nav>
  )
}
