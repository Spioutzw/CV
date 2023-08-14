
import Projet from '@/components/Section/Projet'
import NavBar from '@/components/Section/NavBar'
import Accueil from '@/components/Section/Accueil'
import About from '@/components/Section/About'
import Contact from '@/components/Section/Contact'
import Footer from '@/components/Section/Footer'

export default function Home() {
  return (
    <>
      <NavBar />
      <Accueil />
      <About />
      <Projet />
      <Contact />
      <Footer />
    </>
  )
}
