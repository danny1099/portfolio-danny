import Head from 'next/head'

export const HeadPage = ({ t }) => {
  return (
    <Head>
      <title>{t?.title || 'Danny | Software Developer'}</title>
      <meta name="description" content={t?.description || ''} />
    </Head>
  )
}
