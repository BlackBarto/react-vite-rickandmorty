import useCharactes from "../hooks/useCharactes";
import NotFound from "./NotFound";
import Character from "./Character";
import BTNLoadMore from "./BTNLoadMore.jsx";

export default function CharactersList({search}) {
    const {characters, loading, nextPage, fetchNextPage} = useCharactes(search)

    if (loading) {
        return (
            <div className="h-28 z-20 w-full flex items-center justify-center">
                <div className="absolute h-28 w-28 rounded-full border-8 border-blue-700 border-t-transparent animate-spin"></div>
                <p className="text-white">Loading</p>
            </div>
        )
    }

    if (!characters.length) return <NotFound />

    const charactersItems = characters.map( character => {
        return <Character className="rounded-full" key={character.id} character={character} />
    })


    return (
        <>
          <section className="w-11/12 gap-7 grid grid-cols-characters auto-rows-characters">
              {charactersItems}
          </section>
          { !!nextPage && <BTNLoadMore loadMore={fetchNextPage} /> }
        </>
    )
}
