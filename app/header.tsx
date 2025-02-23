'use client'
import { ResumeCircle } from '@/components/ui/resume-circle'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 ">
      <div className=" flex flex-row items-center justify-between">
       
        <div>
        <Link href="/" className="font-se text-black dark:text-white text-3xl">
          Mitesh Maity
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Full-stack developer from India
        </TextEffect>
      </div>
      <div className="">
        <ResumeCircle/>
      </div>
      </div>
      
    </header>
  )
}
