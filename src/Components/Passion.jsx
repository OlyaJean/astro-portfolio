import React, { useEffect } from 'react'
import ufoIcon from './../assets/ufo.png'

const Passion = (props) => {

  const {ufo,setUfo} = props

 
  return (
    <div className='text-sky-200 mx-auto p-5 bg-blue-950 bg-opacity-65 w-[90vw] text-sm lg:text-2xl rounded-xl flex flex-col gap-1 mt-5 relative'>
     
      <p>My other passion besides coding is <span className='text-xl lg:text-3xl'>Space</span> .</p>
      <p>It's pretty obvious, right!?</p>
     {!ufo?<p className='text-center underline cursor-pointer text-lg hover:scale-125 mt-5' onClick={()=>{setUfo(true)}}>...3,2,1, LIFT OFF </p> : ""}
     {ufo? <img src={ufoIcon} alt="" className=' ufo w-16 cursor-pointer ml-auto absolute right-0 bottom-0 '/> :''}
    </div>
  )
}

export default Passion
