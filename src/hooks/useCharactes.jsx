import { useState } from "react";
import fetchRandom from "../helpers/fetch_random_characters";
// import fetchBySearch from "../helpers/fetch_characters";
let prevSearch = ""

export default function useCharacters(search = "") {
    const [characters, setCharacters] = useState([])
    const callback = search ? fetchRandom : fetchRandom

    const fetchCharacters = () => {
        console.log("busco1")
        callback().then(value => {
            console.log("busco2")
            setCharacters(value)
        })
    }

    const deleteCharacters = () => {
        setCharacters([])
        console.log({characters, name: "holaaa"})
        setTimeout(() => console.log({characters, name: "holaaa"}), 1000)
    }

    return {characters, fetchCharacters, deleteCharacters}
}
