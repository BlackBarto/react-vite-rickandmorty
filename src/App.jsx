import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/SearchCharacter";
import CharactersList from "./components/CharactersList";

function App() {
  const [search, setSearch] = useState("")
  const [currentSearch, setCurrentSearch] = useState("")
  
  const handleSearch = (searchValue) => {
    if( !(searchValue !== search) ) return
    setSearch(searchValue)
  }

  return (
    <div className="min-h-screen bg-gray-900 pb-12">
      <Header>
        <Search currentSearch={currentSearch} handleSearch={handleSearch} setCurrentSearch={setCurrentSearch} />
      </Header>
      <main className="flex mt-6 flex-col items-center">
        <section className="w-full h-28 flex flex-col text-md sm:text-xl items-center">
	        <h2 className="text-white text-center mx-auto text-xl sm:text-3xl">Search your favorite character</h2>
          <Search currentSearch={currentSearch} handleSearch={handleSearch} setCurrentSearch={setCurrentSearch} />
        </section>

        <CharactersList search={search} />
      </main>
    </div>
  )
}

export default App
