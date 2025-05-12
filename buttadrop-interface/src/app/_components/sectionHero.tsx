import 'boxicons/css/boxicons.min.css'
import Image  from 'next/image'
import DropImg from '../../../public/butta_drop_up-remove-bg.png'

export function Hero() {
    return (
        <section className="bg-[#d41818] text-white px-4 md:px-0 relative overflow-hidden ">

            <div>

                <Image 
                src={DropImg}
                alt="Butta Drop Image"
                fill
                sizes='100vw'
                className='object-cover opacity-60 lg:hidden'
                />

                <div className='absolute inset-0 bg-black opacity-35 lg:hidden'>

                </div>

            </div>

            <div className='container mx-auto pt-12 pb-16 md:pb-0 px-4 lg:px-12 relative'>

                <article className='grid grid-cols-1 lg:grid-cols-2 gap-8'>

                    <div className='space-y-6'>
                        <h1 
                        data-aos="fade-down"
                        className="text-4xl font-bold md:text-4xl lg:text-5xl leading-10">
                        Butta Drop – Seu Corpo Merece Esse Aliado
                        </h1>

                        <p 
                        data-aos="fade-right"
                        className="lg:text-lg">
                        O Hidratante Corporal Que Vai Mudar Sua Rotina de Autocuidado
                        Conheça o Butta Drop, o segredo para uma pele macia, radiante e profundamente hidratada o dia inteiro. Enriquecido com ingredientes naturais poderosos, esse hidratante luxuoso combina nutrição intensa com um sensorial suave e envolvente.
                        </p>

                        
                        <a 
                        data-aos="fade-up"
                        data-aos-delay="400"
                        href="#"
                            className="bg-pink-400 text-white px-4 md:mb-8 rounded-md py-2 font-semibold flex items-center justify-center w-fit gap-2 hover:scale-105  duration-200 ease-in-out"
                            >
                                <i className="bx bx-shopping-bag text-[20px]"></i>Adquira já
                        </a>
                        

                        

                    </div>

                    <div 
                    data-aos="fade-left"
                    className='hidden lg:block h-full relative'>

                            <Image src={DropImg} alt="Butta Drop Image" className='object-contain'
                            fill
                            sizes='(max-width: 768px) 0vw, 60vw'
                            quality={100}
                            priority
                            />
                        
                    </div>

                </article>

            </div>


        </section>
    )
}