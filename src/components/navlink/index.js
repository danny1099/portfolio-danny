import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './styles.module.scss'

export const NavLink = ({ href, children, ...props }) => {
  const { pathname } = useRouter()
  const isActive = pathname === href

  return (
    <Link
      {...props}
      href={href}
      className={`${styles.wrapper} ${isActive ? `${styles.isActive}` : ''}`}
    >
      {children}
    </Link>
  )
}
