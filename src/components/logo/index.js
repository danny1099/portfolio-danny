import Image from 'next/image'
import Link from 'next/link'
import { publicRoutes } from '@/routes'

export const Logo = () => {
  return (
    <Link href={publicRoutes.HOME}>
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
