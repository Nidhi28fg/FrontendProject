import React from 'react'
import Gridcards from '../component/Gridcards'
import Carousel from '../component/Carousel'

const Fifth = () => {
    return (
        <div className='p-4 md:py-10 flex flex-col gap-15 lg:gap-20'>
            {/* top heading */}
            <div className='text-center'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-[#0D2561]'>Be a Part of the Change</h1>
                <p className='text-[12px] md:text-[16px] xl:text-[18px] whitespace-normal mt-5'>Join our mission to create a positive impact on communitites wolrdwide through these meaningful oppurtunities.</p>
            </div>
            <Gridcards />

            {/* second section heading */}
            <div className='text-center'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-[#0D2561]'>See Our Camps</h1>
                <p className='text-[12px] md:text-[16px] xl:text-[18px] whitespace-normal mt-5'>Every Camp tells a story of hope, healing, and human connection.</p>
                <p className='text-[14px] md:text-[20px] mt-8 font-semibold text-gray-800'>From remote villages to local communitites, our camps deliver real support medical aid education, cleanups, and more.</p>
            </div>

            <Carousel/> 
        </div>
    )
}

export default Fifth