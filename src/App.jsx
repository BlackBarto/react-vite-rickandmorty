import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/SearchCharacter";
import CharactersList from "./components/CharactersList";

function App() {
  const [search, setSearch] = useState("")
  
  const handleSearch = (searchValue) => {
    console.log(searchValue, search)
    if(!searchValue || !(searchValue !== search) ) return
    
    setSearch(searchValue)
  }

  return (
    <div className="min-h-[200vh] bg-gray-900">
      <Header handleSearch={handleSearch} />
      <main className="flex mt-6 flex-col items-center">
        <section className="w-full h-28 flex flex-col text-xl items-center">
	          <h2 className="text-white mx-auto text-3xl">Search your favorite character</h2>
          <Search handleSearch={handleSearch} />
        </section>

        <CharactersList search={search} />
      </main>
    </div>
  )
}

export default App
