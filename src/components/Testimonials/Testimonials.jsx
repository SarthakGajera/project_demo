import React from 'react'
import reviews from './Reviews'


function Testimonials() {
  return (
    <div className='bg-bl'>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-10'>
            What people are saying
        </h2>
        <div className='flex flex-wrap justify-center'>
            {reviews.map((review,index)=>(
                <div key={index} className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2'>
                    <div className='bg-neutral rounded-md p-6 text-md border border-neutral-800 font-medium'>
                        <p>{review.text}</p>
                        <div className='flex mt-8 items-center'>
                            <img src={review.image} alt="" className='w-12 h-12 mr-6 rounded-full border border-neutral-300' />
                        </div>
                        <h6>{review.name}</h6>
                        <span className='text-small font-normal italic text-neutral-600'>{review.title}</span>
                        
                    </div>
                </div>
            ))}


        </div>
      
    </div>
  )
}

export default Testimonials
