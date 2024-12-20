import React from 'react'


const Projects = () => {
  return (
    <div className='text-sky-200 text-left mx-auto p-5 bg-blue-950 bg-opacity-65 w-[90vw] rounded-xl mt-5'>
      <p className='text-center  text-xl lg:text-2xl underline pt-20 '>Here are some of my projects:</p>

      <section className='lg:flex lg:gap-5 lg:flex-wrap lg:items-center justify-center'>

      <a href="https://the-infinity-expanse.netlify.app/"><div className='border-[1px] border-blue-200 rounded-xl p-5 my-5 cursor-pointer lg:h-52 lg:w-72'>
     <p className='text-xl lg:text-2xl underline  text-center'>The Infinite Expanse</p>
     <br />
     <p className='text-sm lg:text-lg'>A Picture Of the Day (APOD) using NASA API, including a random space fact.</p>
     </div>
     </a>


    <a href="https://study-sprint.netlify.app/"><div className='border-[1px] border-blue-200 rounded-xl p-5 my-5 cursor-pointer lg:h-52 lg:w-72'>
     <p className='text-xl lg:text-2xl underline  text-center'>Study Sprint</p>
     <br />
     <p className='text-sm lg:text-lg'>Manage your personal studying tasks with infinite Pomodoro clock, that plays a soft,relaxing music on each break session.</p>
     </div></a>
    

    <a href="https://avajah.netlify.app/"><div className='border-[1px] border-blue-200 rounded-xl p-5 my-5 cursor-pointer lg:h-52 lg:w-72'>
     <p className='text-xl lg:text-2xl underline  text-center'>pottery goods</p>
     <br />
     <p className='text-sm lg:text-lg'>A full stack, e-commerce website built with Next.js usong MongoDB.</p>
     </div></a>
   

    <div className='border-[1px] border-blue-200 rounded-xl p-5 my-5 cursor-pointer lg:h-52 lg:w-72'>
     <p className='text-xl lg:text-2xl underline  text-center'>Todo App</p>
     <br />
     <p className='text-sm lg:text-lg'>Todo app as simple as possible.</p>
     </div>
  

     <div className='border-[1px] border-blue-200 rounded-xl p-5 my-5 cursor-pointer lg:h-52 lg:w-72'>
     <p className='text-xl lg:text-2xl text-center'>...next project is loading.</p>
     <br />
    
    </div>
     </section>



    </div>
  )
}

export default Projects
