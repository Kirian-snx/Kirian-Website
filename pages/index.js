import { NextSeo } from 'next-seo'

import Contact from '@/components/Contact'
import AboutMe from '@/components/AboutMe'

const Home = () => {

  return (
    <>
        <NextSeo
            title="Kirian Senaux - Développeur Web"
            description="Développeur Web Fullstack, je suis spécialisé dans le développement d'applications web et mobiles."
        />
        <AboutMe />
    </>
  )
}

export default Home