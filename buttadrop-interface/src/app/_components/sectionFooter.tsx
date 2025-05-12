import Link from 'next/link'

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gray-800 text-gray-300 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

                    <div className='flex flex-col justify-center items-center md:mb-16'>
                        <h3 className="text-xl font-bold text-white mb-4">ButtaDrop</h3>
                        <p className="text-center">
                            Sua pele macia e hidratada com o toque suave da natureza.
                            Descubra o poder dos ingredientes puros.
                        </p>
                    </div>

                    
                    <div className='flex flex-col justify-center items-center'>
                        <h4 className="text-lg font-semibold text-white mb-4">Links Úteis</h4>
                        <ul className="space-y-2 text-center">
                            <li className='hover:scale-120 duration-200'><Link href="/#hero" className="hover:text-pink-400 transition-colors">Início</Link></li>
                            <li className='hover:scale-120 duration-200'><Link href="/#meeting" className="hover:text-pink-400 transition-colors">Conheça</Link></li>
                            <li className='hover:scale-120 duration-200'><Link href="/#composition" className="hover:text-pink-400 transition-colors">Composição</Link></li>
                            <li className='hover:scale-120 duration-200'><Link href="/#feedback" className="hover:text-pink-400 transition-colors">Depoimentos</Link></li>
                            <li className='hover:scale-120 duration-200'><Link href="/shop" className="hover:text-pink-400 transition-colors">Comprar Agora</Link></li>
                        </ul>
                    </div>

                    <div className='flex flex-col justify-center items-center md:mb-16'>
                        <h4 className="text-lg font-semibold text-white mb-4">Siga-nos</h4>
                        <div className="flex space-x-4 mb-4">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-300 hover:text-pink-400 transition-colors hover:scale-120 duration-200">
                                <i className='bx bxl-instagram bx-sm'></i> 
                            </a>

                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-300 hover:text-pink-400 transition-colors hover:scale-120 duration-200">
                                <i className='bx bxl-facebook-square bx-sm'></i> 
                            </a>

                            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-gray-300 hover:text-pink-400 transition-colors hover:scale-120 duration-200">
                                <i className='bx bxl-tiktok bx-sm'></i> 
                            </a>

                            <a href="mailto:contato@buttadrop.com" aria-label="Email" className="text-gray-300 hover:text-pink-400 transition-colors hover:scale-120 duration-200">
                                <i className='bx bx-envelope bx-sm'></i> 
                            </a>

                        </div>
                        <p className="text-sm">
                            Dúvidas? <a href="mailto:contato@buttadrop.com" className="hover:text-pink-400 underline">contato@buttadrop.com</a>
                        </p>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-8 text-center">
                    <p className="text-sm">
                        &copy; {currentYear} ButtaDrop. Todos os direitos reservados á FENTY SKIN.
                    </p>
                    <p className="text-xs mt-2">
                        Desenvolvido com <i className='bx bxs-heart text-pink-500'></i> por <a href="https://portfoliocr-web.vercel.app/" target="_blank" className="hover:text-pink-400 underline font-bold">Cristiano</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
