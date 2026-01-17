import TextComponent from "./TextComponent";

export default function () {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
            <div className="container mx-auto p-5 h-16 flex items-center justify-between">
                <div className="block font-bold leading-[1] text-white">
                    <p className="text-[14px]">BRASILEIROS</p>
                    <p className="text-[18px]">NO TEXAS</p>
                </div>

                <button className="bg-gold rounded-[10px] h-[37px] px-3 font-medium buttonHover text-[14px] text-black">
                    Aplicar Agora
                </button>
            </div>
        </header>
    )
}