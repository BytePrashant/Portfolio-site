import Image from 'next/image'
import { Inter } from 'next/font/google'
import {Appbar} from "../components/Appbar"
import {Homepage} from "../components/Homepage"
import {About} from "../components/About"
import {Contact} from "../components/Contact"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div id="root" className="relative w-[1518px] h-[4145px]">
      <Appbar></Appbar>
      <Homepage></Homepage>
      <About></About>
      <Contact></Contact>
    </div>
  );  
}
