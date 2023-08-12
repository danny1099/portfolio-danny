import { Title, Content, Wrapper, GotoMyWork } from '~/home/components'
import { publicRoutes } from '@/routes'
import styles from './styles.module.scss'

export const Landing = ({ t }) => {
  return (
    <section className={styles.container}>
      <Wrapper>
        <span>
          <p>{t.wellcome}</p>
          <GotoMyWork href={publicRoutes.WORK} text={t.linkText} />
        </span>

        <Title text="Danny" />
      </Wrapper>

      <Content />
    </section>
  )
}
