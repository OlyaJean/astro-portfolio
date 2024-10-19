import React from 'react'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "5101efe0-2225-4b4e-82fd-14e14c112c8d");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Email Sent Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    }

  return (
    <div className='text-sky-200 text-left mx-auto p-5 bg-blue-950 bg-opacity-65 w-[90vw] rounded-xl mt-5 md:flex md:gap-5 md:justify-evenly'>
        <div>
        <p className=' text-xl lg:text-2xl text-center'>My contact info:</p>
      <section className='flex gap-5 justify-center my-5'>
        <a href="https://threads.net/@jo.helloworld"><i class="fa-brands fa-threads"></i></a>
      <a href="https://github.com/OlyaJean"><i class="fa-brands fa-github" ></i></a>
      <a href="https://www.instagram.com/_olya_b__/"><i class="fa-brands fa-instagram"></i></a>
      </section>
        </div>

        <div>
        <p className=' text-xl lg:text-2xl text-center'>Or contact me directly:</p>
      <form onSubmit={onSubmit} className='flex flex-col gap-5 mt-5'>
           <label>Your name:</label>
            <input type="text" name="name" placeholder='Enter your name' required className='rounded-xl bg-sky-100 p-3'/>
            <label>Phone Number:</label>
            <input type="tel" name='phone' placeholder='Enter your phone number' required className='rounded-xl bg-sky-100 p-3'/>
            <label>Write your message here:</label>
        <textarea name="message" id="message" placeholder='Enter your message here...' cols={50} rows={5} required className='rounded-xl bg-sky-100 p-3'></textarea>
        <button type='submit' className='rounded-xl cursor-pointer shadow-btnShadow active:border-0 active:shadow-none shadow-sky-200 h-10'>send</button>
        <span>{result}</span>
      </form>
        </div>
    
    
      
    </div>
  )
}

export default Contact
