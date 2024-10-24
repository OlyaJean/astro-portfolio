import React from 'react'

const Skills = () => {
  return (
    <div className='text-sky-200 text-left mx-auto p-5 bg-blue-950 bg-opacity-65 w-[90vw] text-sm lg:text-xl rounded-xl flex gap-5 mt-5 mb-5'>
        <section className='w-[50%] text-center'>
        <p className='underline text-xl lg:text-2xl'>Skills:</p>
     <br />
        <li>HTML/CSS</li>
        <li>JavaScript</li>
        <li>React JS</li>
        <li>Tailwind CSS</li>
        <li>Git/gitHub</li>
        <li>Responsive Design</li>
        <li>Sass</li>
        <li>Redux</li>
      
        </section>

        <section className='w-[50%] text-center'>
        <br />
        <br />
        <li>Restful APIs</li>
        <li>Node JS</li>
        <li>OOP</li>
        <li>SEO</li>
        <li>Testing and Debugging</li>
        <li>Figma</li>
        <li>loading more...</li>
        </section>
   
    </div>
  )
}

export default Skills
