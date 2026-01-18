export default function () {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
            <div className="container mx-auto p-5 h-16 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <img src="/imagens/icon.png" className="w-[30px]" />
                    <div className="block font-bold leading-[1] text-white">
                        <p className="text-[14px]">BRASILEIROS</p>
                        <p className="text-[18px]">NO TEXAS</p>
                    </div>
                </div>

                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfhvx0_1TvtPPCiCJL8PIYUkwHDvbhAcpoA22lFxmckm_jrTg/viewform?usp=header"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                >
                    <button className="bg-gold rounded-[10px] h-[37px] px-3 font-medium buttonHover text-[14px] text-black">
                        Aplicar Agora
                    </button>
                </a>
            </div>
        </header>
    )
}