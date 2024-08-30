
"use client";
import Link from "next/link"
// import cb from "../../..public/assets/cb.png"
import Image from "next/image";


export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-4 z-50 text-white shadow-sm">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <Link href="#" className="md:flex hidden items-center space-x-3" prefetch={false}>
            <Image className="size-10" width={40} height={40} src="/assets/cb.png" />
            <span className="font-medium text-lg">CODEBASE</span>
          </Link>
          <nav className="rounded-full bg-black border-white/[0.1] py-4 px-8 border space-x-4 flex gap-4">
            <Link
              href="/main"
              className="font-medium flex items-center text-base transition-colors py-1 px-2 rounded-lg hover:border-zinc-800 border border-transparent"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="/projectSection"
              className="font-medium flex items-center text-base transition-colors py-1 px-2 rounded-lg hover:border-zinc-800 border border-transparent"
              prefetch={false}
            >
              Projects
            </Link>
            <Link
              href="/team"
              className="font-medium flex items-center text-base transition-colors py-1 px-2 rounded-lg hover:border-zinc-800 border border-transparent"
              prefetch={false}
            >
              Team
            </Link>
            <Link
              href="#"
              className="font-medium flex items-center text-base transition-colors py-1 px-2 rounded-lg hover:border-zinc-800 border border-transparent"
              prefetch={false}
            > 
              Events
            </Link>
            <a
              href="/main/#contact-us"
              className="font-medium flex items-center text-base transition-colors py-1 px-2 rounded-lg hover:border-zinc-800 border border-transparent"
              prefetch={false}
            >
              Contact Us
            </a>
          </nav>
          {/* <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              Sign in
            </Button>
            <Button size="sm">Sign up</Button>
          </div> */}
        </div>
      </div>
    </nav>
  )
}

