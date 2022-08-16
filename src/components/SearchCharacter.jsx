import { FaSearch } from "react-icons/fa";

export default function SearchCharacter({handleSearch, currentSearch, setCurrentSearch}) {
    const makeChange = ({target: {value}}) => {
        setCurrentSearch(value)
    }

    const makeSearch = e => {
        e.preventDefault()
        const search = e.target.search.value
        handleSearch(search)
    }

    return (
        <form role="search" onSubmit={makeSearch} className="flex items-center bg-gray-600 w-11/12 min-w-[10rem] min-h-[2rem] h-1/3">
            <input aria-label="Search the name of your favorite character" onChange={makeChange} value={currentSearch} type="search" name="search" placeholder="Search a character..." className="grow py-1 text-white border-none transition-colors duration-200 outline-none px-1.5 w-6 bg-transparent hover:placeholder:text-white focus:placeholder:text-gray-400 focus:bg-gray-500 hover:bg-gray-400" />
            <button type="submit" className="text-white opacity-70 transition-colors py-2 px-4 duration-200 hover:text-black hover:bg-sky-300 focus:text-black focus:bg-sky-300 outline-none border-none">
                <FaSearch />
            </button>
        </form>
    )
}
