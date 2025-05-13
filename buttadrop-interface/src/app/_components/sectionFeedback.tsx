'use client'

import UseEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Feedback as FeedbackProps } from '../types/feedback'
import Image from 'next/image'

interface FeedbackComponentProps {
    data: FeedbackProps[]
}

export function ShowFeedback({ data }: FeedbackComponentProps) {
    const [emblaRef, emblaApi] = UseEmblaCarousel({ 
        loop: true,
     })

     function scrollNext() {
        emblaApi?.scrollNext()
     }

     function scrollPrev() {
        emblaApi?.scrollPrev()
     }

    return (
        
        <section className="bg-[#fdf6ec] py-16">
            
            <div 
            data-aos="fade-up"
            className="container mx-auto px-8">

                <div className="">

                    <h2 className="text-4xl font-bold uppercase text-center mb-8">Feedback</h2>

                    <div className='relative max-w-4xl mx-auto'>

                        <div
                        ref={emblaRef} 
                        className='overflow-hidden'>

                            <div className='flex'>

                                {data.map((item) => (
                                    <div key={item.id} className='flex-[0_0_100%] min-w-0 px-3'>

                                        <article className='bg-[#d41818] text-white rounded-2xl p-6 space-y-4 flex flex-col'>

                                            <div className='flex flex-col items-center text-center space-y-4 select-none '>

                                                <div className='relative w-24
                                                h-24'>

                                                    <Image 
                                                        src={item.avatarUrl}
                                                        alt={item.name}
                                                        fill
                                                        sizes='96px'
                                                        className='object-cover rounded-full'
                                                    />

                                                </div>

                                                <p className='text-gray-300  font-semibold'>
                                                    {item.testimonial}
                                                </p>

                                                <div className=''>
                                                    <p className='font-bold text-xl select-none'>
                                                        {item.name}
                                                    </p>
                                                    <p className='text-gray-300 text-sm select-none '>
                                                        {item.role}
                                                    </p>
                                                </div>

                                            </div>
                                            
                                        </article>

                                    </div>
                                ))}

                            </div>

                        </div>

                        <button 
                        onClick={scrollPrev}
                        className='
                            bg-white flex justify-center items-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10 cursor-pointer'>
                            <ChevronLeft
                            className='w-6 h-6 text-gray-600'/>
                        </button>

                        <button 
                        onClick={scrollNext}
                        className='
                            bg-white flex justify-center items-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10 cursor-pointer'>
                            <ChevronRight
                            className='w-6 h-6 text-gray-600'/>
                        </button>



                    </div>

                </div>

            </div>

        </section>

    )
}