'use client'
import Button  from '../../components/Button'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { motion } from 'framer-motion'


export default function Hero() {

   
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");
  
  useEffect(() => {
    const mouseMove = (e:any) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variant:any = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 100,
      width: 100,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "rgb(244, 244, 244)",
      mixBlendMode:"difference"
    },
    textwhite: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "rgb(255, 255, 255)",
      mixBlendMode: "difference"
    }
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");


  return (
    <div>
        <div className='flex flex-col items-center justify-center h-[70vh] px-[5%] select-none'>
            <div>
                <motion.div className='cursor' variants={variant} animate={cursorVariant}/>
                <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className='md:text-[3rem] text-[3rem] uppercase leading-[1.2]'>
                    <span>Student</span> <span>& Aspiring</span> <span>Software</span> <span>Engineer</span>
                </h1>
            </div>
            <div className='flex md:flex-row flex-col justify-between w-full pt-16'>
                <div onMouseEnter={textEnter} onMouseLeave={textLeave} className='w[330px]'>
                    <p className="text-left">I am currently studying full-stack software development <br/> at Washington University in St. Louis. In my free time,<br/>  I enjoy learning about deep learning AI. I hope to work <br/>with a family that delivers reinnovative experiences to people <br/> across the world!</p>
                </div>

                <div className='md:w-[500px] w-[370px] flex flex-col gap-6 items-start'>
                    <p onMouseEnter={textEnter} onMouseLeave={textLeave} className="text-right">Programming Languages: C++, Java, JavaScript, Python <br/> Frameworks: React, Next, PHP, Node JS, HTML, Tailwind CSS <br/>Databases: MySQL, MongoDB <br/> Servers: AWS, Vercel</p>
                    {/* <Button 
                    onClick={() => {}}
                    label='Ongoing and previous projects'
                    icon = {BsFillArrowRightCircleFill}
                    black
                    onMouseEnter={textEnter}
                    onMouseLeave={textLeave}
                    /> */}
    
                    {/* <a className="group flex items-center py-3 active" href="#aboutme">
                        <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200  group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">ONGOING & PREVIOUS PROJECTS</span>
                    </a> */}
                </div>
            </div>
        </div>
    </div>
  )
}
