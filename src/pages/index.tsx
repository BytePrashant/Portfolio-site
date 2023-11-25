import Image from 'next/image'
import { Inter } from 'next/font/google'
import {Appbar} from "../components/Appbar"
import {Homepage} from "../components/Homepage"
import {About} from "../components/About"
import {Projects} from "../components/Projects"
import {Contact} from "../components/Contact"
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div id="root" className="w-full h-full">
      <Appbar></Appbar>
      <Homepage></Homepage>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );  
}
