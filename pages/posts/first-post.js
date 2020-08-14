import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost(){
    return (
        <Layout>
            <Head><title>First Post</title></Head>
            <h1>First Post</h1>
            <p>Why was the developer so sad at their new job? Because they couldn't get <strong>arrays</strong>...🤦‍♀️</p>
        </Layout>
    )
}