import React from 'react'

const Skills = () => {
  return (
    <div className='text-sky-200 text-left mx-auto p-5 bg-blue-950 bg-opacity-65 w-[90vw] text-sm lg:text-xl rounded-xl flex gap-5 mt-5'>
        <section className='w-[50%] text-center'>
        <p className='underline text-xl lg:text-2xl'>Hard Skills:</p>
     <br />
        <li>HTML/CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Tailwind CSS</li>
        <li>Git/gitHub</li>
        <li>Responsive Design</li>
        <li>Sass</li>
        <li>...loading more</li>
      
        </section>

        <section className='w-[50%] text-center'>
        <p className='underline text-xl lg:text-2xl'>Short Tearm Goals:</p>
        <br />
        <li>Playwright</li>
        <li>TypeScript</li>
        <li>Next.js</li>
        <li>Astro</li>
        <li>GraphQL</li>
        <li>React Native</li>
        <li>Figma</li>
        <li>WordPress</li>
        </section>
   
    </div>
  )
}

export default Skills
