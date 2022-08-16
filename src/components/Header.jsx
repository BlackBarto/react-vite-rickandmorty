import Search from "./SearchCharacter"
import logo from "../assets/react.svg";

export default function Header({children}) {
    const returnToTop = () => {
        window.scrollTo(0, - (window.scrollY))
    }

    return (
        <header className="sticky top-0 z-50 flex flex-wrap min-h-[6rem] bg-indigo-800 py-3 gap-2 items-center px-4">
            <div className="grow flex items-center gap-x-2 justify-center">
                <h1 className="uppercase text-lg text-center sm:text-2xl font-bold text-white">Rick and Morty page with react</h1>
                <img src={logo} className="h-auto w-10" alt="React image"/>
            </div>
            <nav className="grow flex justify-center items-center gap-x-2 min-w-[14rem]">
                <button className="px-3 py-2 text-gray-200 sm:text-lg underline decoration-2 decoration-transparent hover:decoration-sky-300 hover:text-white transition-colors duration-200" onClick={returnToTop}>Home</button>
                {children}
            </nav>
        </header>
    )
}
