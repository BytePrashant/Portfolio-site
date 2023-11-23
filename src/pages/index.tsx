import Image from 'next/image'
import { Inter } from 'next/font/google'
import {Appbar} from "../components/Appbar"
import {Homepage} from "../components/Homepage"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div id="root">
      <Appbar></Appbar>
      <Homepage></Homepage>
    </div>
  )  
}
