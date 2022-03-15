import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <div>
      <Layout>
        <h1>Aprendiendo Next.js</h1>
        
      </Layout>


      <Link href="/nosotros">Ir a Nosotros</Link>
    </div>
  )
}
