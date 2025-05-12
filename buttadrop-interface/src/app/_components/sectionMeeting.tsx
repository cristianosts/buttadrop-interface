import Image from "next/image"
import ModelImage from '../../../public/butta drop model.jpg'
import ButtaVase from '../../../public/butta drop vase cutted.jpg'

export function Meeting() {
    return (
         
            <section className="bg-[#fdf6ec] py-16">

                <div className="container mx-auto px-4">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 item-center">

                        <div 
                        data-aos="fade-up-right"
                        
                        className="relative">

                            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden">
                                <Image
                                  src={ModelImage}
                                  alt="Butta Drop Model"
                                  fill
                                  quality={100}
                                  priority
                                  className="object-cover hover:scale-110 duration-100"
                                />
                            </div>

                            <div className="absolute w-40 h-40 right-4 -bottom-8 rounded-lg border-4 overflow-hidden border-white">
                                <Image
                                  src={ButtaVase}
                                  alt="Butta Drop Vase"
                                  fill
                                  quality={100}
                                  priority
                        
                                />
                            </div>

                        </div>

                        <div 
                        data-aos="fade-up-left"
                        className="space-y-6 mt-10">

                            <h2 className="text-4xl font-bold">SOBRE</h2>

                            <p>
                                O Butta Drop é um hidratante corporal que combina ingredientes naturais e tecnologia avançada para proporcionar uma hidratação intensa e duradoura. Sua fórmula leve e não oleosa é rapidamente absorvida pela pele, deixando-a macia, suave e com um brilho saudável. Com uma fragrância envolvente, o Butta Drop transforma sua rotina de cuidados em um momento de prazer e bem-estar. Ideal para todos os tipos de pele, ele é perfeito para o uso diário, garantindo uma pele radiante e hidratada ao longo do dia.
                            </p>

                            <ul>

                                <li className="flex items-center gap-2">
                                    <i className="bx bxs-check-circle text-pink-400"></i>
                                    Hidratação intensa e duradoura
                                </li>
                                <li className="flex items-center gap-2">
                                    <i className="bx bxs-check-circle text-pink-400"></i>
                                    Textura leve e não oleosa
                                </li>
                                <li className="flex items-center gap-2">
                                    <i className="bx bxs-check-circle text-pink-400"></i>
                                    Absorção rápida
                                </li>
                                <li className="flex items-center gap-2">
                                    <i className="bx bxs-check-circle text-pink-400"></i>
                                    Fragrância envolvente
                                </li>
                        
                            </ul>

                            <a href="#"
                            className="bg-pink-400 text-white px-4 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2 hover:scale-110 duration-200"
                            >
                                <i className="bx bx-shopping-bag text-[20px]"></i> Adquira já
                            </a>

                        </div>

                    </div>

                </div>


            </section>

    )
}