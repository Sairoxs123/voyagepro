import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { EarthCanvas } from "../canvas/index";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";

const Contact = () => {
  

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <h1 className="m-5 text-5xl font-extrabold">Contact Us</h1>

        <form
          
          className='m-5 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-slate-200 font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-yellow-600 text-slate-200 rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-slate-200 font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              placeholder="What's your email adress?"
              className='bg-tertiary py-4 px-6 placeholder:text-yellow-600 text-slate-200 rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-slate-200 font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-yellow-600 text-slate-200 rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-yellow-600 py-3 px-8 rounded-xl outline-none w-fit text-slate-200 font-bold shadow-md shadow-primary'
          >
            Submit
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
