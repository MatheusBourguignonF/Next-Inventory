import Link from "next/link"
import { Inter, Orbitron } from "next/font/google"

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export function Header() {
    return(
        <header className="bg-black flex place-content-between pl-20 pr-20 h-15 items-center">
            <div>   
                 <h1 className={`${orbitron.className} text-white text-2xl font-bold`}>Next Inventory</h1>
            </div>
            <div className="flex gap-10">
                <Link href={'/'} className="text-white font-bold">Home</Link>
                <Link href={'/'} className="text-white font-bold">Login</Link>
                <Link href={'/'} className="text-white font-bold">SignUp</Link>
            </div>
        </header>
    )
}