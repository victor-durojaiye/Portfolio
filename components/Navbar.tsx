'use client'
import React, {useState} from 'react'
import Link from 'next/link'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import { useRouter } from 'next/navigation'
import Button from './Button'

export default function Navbar() {
const router = useRouter()
  return (
    <header>
        <div className='flex items-center justify-between px-6 py-6 cursor-default'>
            <Link href='/' className='uppercase text-[2rem] z-50 ml-4'>Victor <span className = 'text-gray-400'>Durojaiye</span></Link>
            <div className='flex items-center gap-4'>
                {/* <Button 
                icon={BsFillArrowRightCircleFill}
                label='Contact me!'
                onClick={() => router.push('/contacts')}
                /> */}
                 {/* <a className="group flex items-center py-3 active" href="#aboutme">
                    <span className="group/contactme inline-flex lg:font-medium">
                        <span className="sr-only">Contact me!</span>
                        <span className="group-hover/contactme:text-red-400 transition duration-75 group-hover/contactme:translate-y-px delay-[50ms]" aria-hidden="true">C</span>
                        <span className="group-hover/contactme:text-orange-400 transition duration-75 group-hover/contactme:translate-y-px delay-[75ms]" aria-hidden="true">o</span>
                        <span className="group-hover/contactme:text-yellow-400 transition duration-75 group-hover/contactme:translate-y-px delay-[100ms]" aria-hidden="true">n</span>
                        <span className="group-hover/contactme:text-lime-400 transition duration-75 group-hover/contactme:translate-y-px delay-[125ms]" aria-hidden="true">t</span>
                        <span className="group-hover/contactme:text-green-400 transition duration-75 group-hover/contactme:translate-y-px delay-[150ms]" aria-hidden="true">a</span>
                        <span className="group-hover/contactme:text-teal-400 transition duration-75 group-hover/contactme:translate-y-px delay-[170ms]" aria-hidden="true">c</span>
                        <span className="group-hover/contactme:text-cyan-400 transition duration-75 group-hover/contactme:translate-y-px delay-[200ms]" aria-hidden="true">t</span>
                        <span className="group-hover/contactme:text-sky-400 transition duration-75 group-hover/contactme:translate-y-px delay-[225ms]" aria-hidden="true">&nbsp;</span>
                        <span className="group-hover/contactme:text-blue-400 transition duration-75 group-hover/contactme:translate-y-px delay-[250ms]" aria-hidden="true">m</span>
                        <span className="group-hover/contactme:text-indigo-400 transition duration-75 group-hover/contactme:translate-y-px delay-[275ms]" aria-hidden="true">e</span>
                    </span>
                </a> */}
            </div>
        </div>
    </header>
  )
}
