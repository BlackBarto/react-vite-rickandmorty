import useCharactes from "../hooks/useCharactes";
import Character from "./Character";

export default function CharactersList({search}) {
    const {characters, fetchCharacters, deleteCharacters} = useCharactes(search)

    if (!characters.length) {
        fetchCharacters()
        return (
            <div className="h-24 z-20 w-full flex items-center justify-center">
                <div className="absolute h-24 w-24 rounded-full border-4 border-blue-700 border-t-transparent animate-spin"></div>
                <p>Loading</p>
            </div>
        )
    }

    const charactersItems = characters.map( character => {
        return <Character key={character.id} character={character} />
    })

    return (
        <section className="w-11/12 gap-7 grid grid-cols-characters auto-rows-characters">
            {charactersItems}
        </section>
    )
}
