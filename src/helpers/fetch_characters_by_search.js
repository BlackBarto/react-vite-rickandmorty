export default function fetchCharactersBySearch({search, signal, nextPage}) {
  const url = nextPage || `https://rickandmortyapi.com/api/character/?name=${search.toLowerCase()}`

  return fetch(url, { signal })
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => {
        return [json.results, json.info.next]
    })
    .catch(err => {
      if (err.name === "AbortError") return false

      console.log(err)
      return [[], null]
    })
}
