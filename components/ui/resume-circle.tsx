'use client'
import Link from 'next/link'
import { motion } from 'motion/react'

export function ResumeCircle() {
  return (
    <Link href="https://drive.google.com/file/d/1bZ7EQmDnFfm7EHtDzrypXFniUYOm1oMR/view?usp=sharing">
      <motion.div
        className="relative inline-block w-20 h-20 rounded-full border-2 border-zinc-900 dark:border-white flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 100 100" className="absolute w-full h-full">
          <defs>
            <path
              id="circlePath"
              d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
            />
          </defs>
          <text dy="5" className="text-xl fill-zinc-900 dark:fill-white">
            <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
              Resume
            </textPath>
          </text>
        </svg>
      </motion.div>
    </Link>
  )
}
