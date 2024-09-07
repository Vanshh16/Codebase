
"use client";
import Link from "next/link"
// import cb from "../../..public/assets/cb.png"
import Image from "next/image";


export default function Navbar() {

  if (typeof window !== "undefined") {
    var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "16px";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
  }
  
}

  return (
    <nav id="navbar" className="fixed inset-x-0 top-4 z-50 text-white shadow-sm">
      <div className="w-[40%] md:w-full max-w-7xl px-4">
        <div className="flex justify-between h-14 items-center">
          <Link href="/main" className="hidden md:flex items-center space-x-3" prefetch={false}>
            <Image className="size-10" width={40} height={40} src="/assets/cb.png" />
            <span className="font-medium hidden md:block text-lg">CODEBASE</span>
          </Link>
          <nav className="rounded-full bg-black border-white/[0.1] py-1 px-2 md:py-4 md:px-8 border md:space-x-4 flex md:gap-4 shadow-sm">
            <Link
              href="/main"
              className="font-medium flex items-center text-xs md:text-base transition-colors py-1 px-2 rounded-lg hover:border-zinc-800 border border-transparent"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="/projectSection"
              className="font-medium flex items-center text-xs md:text-base transition-colors py-1 px-2 rounded-lg hover:border-zinc-800 border border-transparent"
              prefetch={false}
            >
              Projects
            </Link>
            <Link
              href="/team"
              className="font-medium flex items-center text-xs md:text-base transition-colors py-1 px-2 rounded-lg hover:border-zinc-800 border border-transparent"
              prefetch={false}
            >
              Team
            </Link>
            <Link
              href="#"
              className="font-medium flex items-center text-xs md:text-base transition-colors py-1 px-2 rounded-lg hover:border-zinc-800 border border-transparent"
              prefetch={false}
            > 
              Events
            </Link>
            <Link
              href="#contact-us"
              className="font-medium flex items-center text-xs md:text-base transition-colors py-1 px-2 rounded-lg hover:border-zinc-800 border border-transparent"
              prefetch={false}
            >
              Contact Us
            </Link>
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

