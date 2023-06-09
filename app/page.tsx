'use client'
import Hero from "./scene/Hero";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

export default function Home() {

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }


  return (
    <>
    <div className="group relative rounded-xl border border-white/10 bg-gray-900 px-8 py-16 shadow-2xl" onMouseMove={handleMouseMove}>
    
    <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 80%
            )
          `,
        }}
      />
    <div className="mx-auto min-h-screen max-w-screen-x1 px-6 py-12 md:px-12 md:py-20 lg:px-25 lg:py-0">
    <Hero/>

    <h1 className="text-[1rem] font-bold uppercase justify-center text-center">Projects</h1>

    <main className="pt-24 lg:w-1/2 mx-auto lg:py-24">
     <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="selected-projects">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"></div>
    
      <div className=""> 
        <ul className="group/list ">
          <li className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="z-10 sm:order-2 sm:col-span-6">
                <a className="group flex items-center py-3 active" href="#">
                  {/* <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200  group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span> */}                
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Tanuki</span>
                </a>
                <p className="mt-2 text-sm leading-normal">Tanuki is a web appication that makes learning Japanese more convenient.</p>
                <ul className="mt-2 flex flex-wrap">
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-zinc-400/10 px-3 py-1 text-xs font-medium leading-5 text-zinc-300">
                      Next
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300">
                      Tailwind
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300">
                      Three
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3>
                <a className="group flex items-center py-3 active" href="#">
                  {/* <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200  group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span> */}
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">MealMaster</span>
                </a>
                </h3>
                <p className="mt-2 text-sm leading-normal">MealMaster makes health tracking super easy.</p>
                <ul className="mt-2 flex flex-wrap">
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300">
                      React
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium leading-5 text-purple-300">
                      Express
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-yellow-400/10 px-3 py-1 text-xs font-medium leading-5 text-yellow-300">
                      MongoDB
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300">
                      Tailwind
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-lime-400/10 px-3 py-1 text-xs font-medium leading-5 text-lime-300">
                      Mapbox GL API
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>


      </div>
     
    </section>

    <ul className="m1-1 mt-8 flex items-center justify-center">
      <li className="mr-5 text-xs">
        <a className="block hover:text-slate-200" href="https://github.com/victordurojaiye">
          <span className="sr-only">GitHub</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
        </a>
      </li>
      <li className="mr-5 text-xs">
        <a className="block hover:text-slate-200" href="https://www.linkedin.com/in/victor-durojaiye-/">
          <span className="sr-only">LinkedIn</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>
        </a>
      </li>
    </ul>


    </main>
    </div>
    
    
    </div>
    </>
   
  )
}

