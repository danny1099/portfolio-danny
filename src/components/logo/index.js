import Image from 'next/image'
import Link from 'next/link'
import { publicRoutes } from '@/routes'
import styles from './styles.module.scss'

export const Logo = () => {
  return (
    <Link href={publicRoutes.HOME} className={styles.wrapper}>
      <Image
        src="/images/dale-logo.png"
        alt="Logo Danny"
        loading="lazy"
        height={35}
        width={35}
      />
    </Link>
  )
}
