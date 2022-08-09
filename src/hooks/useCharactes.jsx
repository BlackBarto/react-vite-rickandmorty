import { useState } from "react";
import fetchRandom from "../helpers/fetch_random_characters";
import fetchBySearch from "../helpers/fetch_characters_by_search";
let prevSearch = ""

export default function useCharacters(search = "") {
    const [characters, setCharacters] = useState([])
    const callback = search ? fetchBySearch : fetchRandom
    
    if (prevSearch !== search) {
        prevSearch = search
        setCharacters([])
    }

    const fetchCharacters = () => {
        callback(search).then(value => {
            setCharacters(() => value)
        })
    }

    return [characters, fetchCharacters]
}
