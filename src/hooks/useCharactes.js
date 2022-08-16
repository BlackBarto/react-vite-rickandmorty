import { useState, useEffect } from "react";
import fetchRandom from "../helpers/fetch_random_characters";
import fetchBySearch from "../helpers/fetch_characters_by_search";

let nextPage = ""
export default function useCharacters(search = "") {
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(true)
    const callback = search ? fetchBySearch : fetchRandom
    let controller = new AbortController()

    useEffect(() => {
        const signal = controller.signal

        callback({search, signal}).then(value => {
            if (!value) return

            if (search) {
               nextPage = value[1]
               setCharacters(() => value[0])
            } else {
               setCharacters(() => value)
            }

            setLoading(false)
        })

        return () => {
            controller.abort()
            controller = new AbortController()
            setLoading(true)
        }
    }, [search])

    const fetchNextPage = () => {
        const signal = controller.signal
        return callback({search, signal, nextPage}).then(value => {
            if (!value) return

            if (search) {
               nextPage = value[1]
               setCharacters((prev) => prev.concat(value[0]))
            } else {
               setCharacters((prev) => prev.concat(value))
            }

            setLoading(false)
        })
    }

    return {characters, loading, nextPage, fetchNextPage}
}
