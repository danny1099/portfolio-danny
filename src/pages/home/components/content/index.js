import styles from './styles.module.scss'

export const Content = () => {
  return (
    <article className={styles.wrapper}>
      <img
        src="/images/landing-content.jpeg"
        alt="Image for landing page of portfolio"
        loading="lazy"
      />
    </article>
  )
}
