import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Equipment from '@/components/sections/Equipment'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import BGMPlayer from '@/components/ui/BGMPlayer'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Equipment />
      <About />
      <Contact />
      <BGMPlayer src="/music/2. Rap Verse 1_ (1).mp3" />
    </>
  )
}
