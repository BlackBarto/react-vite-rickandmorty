import { FaSearch } from "react-icons/fa";

export default function SearchCharacter({handleSearch}) {
    const makeSearch = e => {
        e.preventDefault()
        const search = e.target.search.value
        handleSearch(search)
    }

    return (
        <form onSubmit={makeSearch} className="flex items-center gap-x-3 pr-3 bg-gray-600 hover:bg-gray-500 w-2/3 min-w-[15.3rem] min-h-[2rem] h-1/3">
            <input type="search" name="search" placeholder="Search a character..." className="grow py-1 text-white border-none outline-none px-1.5 bg-transparent prev focus:bg-gray-500" />
            <button type="submit" className="text-white">
                <FaSearch />
            </button>
        </form>
    )
}
