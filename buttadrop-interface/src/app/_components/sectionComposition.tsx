'use client'

import UseEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Props as IngredientItemProps } from '../types/composition'
interface CompositionComponentProps {
    data: IngredientItemProps[]
}

export function Composition({ data }: CompositionComponentProps) {
    const [emblaRef, emblaApi] = UseEmblaCarousel({ 
        loop: false,
        align: 'start',
        slidesToScroll: 1,
        breakpoints: {
            '(min-width: 768px)': { slidesToScroll: 3 }
        }

     })

     function scrollNext() {
        emblaApi?.scrollNext()
     }

     function scrollPrev() {
        emblaApi?.scrollPrev()
     }

    return (
        
        <section className="bg-white py-16">
            
            <div
            data-aos="fade-up"
            className="container mx-auto px-8">

                <div className="">

                    <h2 className="text-4xl font-bold uppercase text-center mb-8">Composição</h2>

                    <p className="mb-12">
                        O Butta Drop é formulado com ingredientes de alta qualidade, cuidadosamente selecionados para proporcionar uma experiência única de hidratação e cuidado para a pele. Conheça os principais ingredientes que fazem do Butta Drop o seu aliado perfeito na rotina de cuidados com a pele.
                    </p>

                    <div className='relative'>

                        <div
                        ref={emblaRef} 
                        className='overflow-hidden '>

                            <div className='flex'>

                                {data.map((item) => (
                                    <div key={item.id} className='flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3'>

                                        <article className='bg-[#d41818] text-white rounded-2xl p-6 space-y-4 lg:h-[200px] flex flex-col'>

                                            <div className='flex-1 flex items-start'>

                                                <div className='p-2'>
                                                    <h3 className='font-bold text-xl select-none'>{item.title}</h3>

                                                    <p className='text-gray-300 select-none pb-4'>{item.description}</p>
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