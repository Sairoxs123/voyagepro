import React from 'react'

const Subscription = ({theme}) => {


  return (


    <div className='flex justify-center items-center mt-20'>
      <div className="group before:hover:scale-95 before:hover:h-72 before:hover:w-screen before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-screen before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-400 via-orange-300 to-orange-600 before:absolute before:top-0 h-72 relative bg-slate-200 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden w-screen">
        <div className="w-28 h-28 bg-blue-600 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500"></div>
        <div className="z-10  group-hover:-translate-y-10 transition-all duration-500">
          <span className="text-2xl font-semibold text-slate-800">Voyager Pro</span>
          <p className="text-slate-800">Travel Smarter, Not Harder: Your Ultimate Itinerary Planner App!</p>
        </div>
        <a className="bg-blue-900 px-4 py-1 text-white rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-blue-700" href="#">Subscribe</a>
      </div>
    </div>
  )
}

export default Subscription