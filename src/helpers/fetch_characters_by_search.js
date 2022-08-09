export default function fetchCharactersBySearch(search) {
  const url = `https://rickandmortyapi.com/api/character/?name=${search.toLowerCase()}`

  console.log({url})
  return fetch(url)
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => json.results)
    .catch(err => {
      console.log(err)
      return []
    })
}