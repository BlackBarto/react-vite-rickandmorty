import Search from "./SearchCharacter"
import logo from "../assets/react.svg";

export default function Header({handleSearch}) {
    const returnToTop = () => {
        window.scrollTo(0, window.screenTop)
    }

    return (
        <header className="sticky top-0 z-50 flex flex-wrap min-h-[6rem] bg-indigo-800 py-3 gap-y-2 items-center px-4">
            <div className="grow flex items-center gap-x-2 justify-center">
                <h1 className="uppercase text-2xl font-bold text-white">Rick and Morty page with react</h1>
                <img src={logo} className="h-auto w-10" alt="React image"/>
            </div>
            <nav className="grow flex justify-center items-center gap-x-2">
                <button className="px-3 py-2 text-gray-200 text-lg underline decoration-2 decoration-transparent hover:decoration-sky-300 hover:text-white transition-colors duration-200" onClick={returnToTop}>Home</button>
                <Search handleSearch={handleSearch} />
            </nav>
        </header>
    )
}
