import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/Components/Header'
import Hero from '@/Components/Hero'
import About from '@/Components/About'
import WorkExperience from '@/Components/WorkExperience'
import Skills from '@/Components/Skills'
import Projects from '@/Components/Projects'
import Contact from '@/Components/Contact'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='bg-[rgb(30,26,45)] h-screen text-white snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-700/40 scrollbar-thumb-[rgb(30,26,45)]/80'>
      <Head>
        <title>portfolio</title>
     
      </Head>
    
    {/* header */}
<Header></Header>

    {/* hero  */}
<section id="hero" className='snap-start'>
<Hero></Hero>
</section>
 
    {/* about  */}
  <section id="about" className='snap-center'>
 <About></About>
  </section>

    {/* experience */}
  <section id="experience" className='snap-center'>
    <WorkExperience></WorkExperience>
  </section>


    {/* skills */}
<section id="skills" className='snap-start'>
  <Skills></Skills>
</section>

  {/* projects */}
  <section id="projects" className='snap-center'>
    <Projects></Projects>
  </section>


    {/* contact us section */}

    <section id="contact" className='snap-center'>
      <Contact></Contact>
    </section>


    <Link href="#hero">
      <footer className='sticky bottom-5 w-full cursor-pointer'>
        <div className='flex items-center justify-center'>
          <img className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer' src=" https://i.ibb.co/vBPXqNC/1638089535060.jpg" alt="" />
        </div>
      </footer>
    </Link>
    </div>
  )
}
