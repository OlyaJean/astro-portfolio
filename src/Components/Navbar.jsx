import React, { useEffect, useState } from 'react'
import earthRocket from './../assets/earthRocket.png' 
import rocket from './../assets/rocket.png' 


const Navbar = (props) => {
  const {active,setActive} = props
 
    useEffect(()=>{
        setTimeout(()=>{
            active? window.scrollTo( {top: 1000, behavior: "smooth"}): ''

        },1800) 
    })

  return (
    <nav className='w-screen h-screen'>
      <ul className='p-5 flex justify-end items-center gap-10'>
        {!active? <li className='text-sky-200 text-lg'>launch me 	&#8674;</li>
        :""}
          <li>
           {!active? <img src={earthRocket} alt="" className='earth w-16  cursor-pointer' onClick={()=>{setActive(true)}}/> : <img src={rocket} alt="" className='rocket w-16  cursor-pointer' onClick={()=>{setActive(false)}}/>} 
            </li>
      </ul>
      <section className='flex gap-10 flex-col'>   
      
         <h1 className='text-5xl sm:text-6xl text-center text-sky-200 mt-44 mx-5 font-bold'>&lt;Hello World!&gt; <br /> Let's explore my mission!</h1>
     
      </section>
 
      
    </nav>
  )
}

export default Navbar
 