import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Why was the skeleton so sad at the dance party? Because they had no<strong>body</strong> to dance with. 😢</p>
      </section>
    </Layout>
  )
}