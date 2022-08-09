const  BASE_URL = "https://rickandmortyapi.com/api/character"

export default function fetchRandomCharacters() {
    const result = []
    let count = 10
    
    while (count >= 0) {
        const randomId = Math.round((Math.random() * 824 + 1))
        const promiseOfCharacter = fetch(`${BASE_URL}/${randomId}`)
            .then(res => res.ok ? res.json() : Promise.reject())
            .then(json => json)
        
        result.push(promiseOfCharacter)
        count = count - 1
    }

    return Promise.allSettled(result).then(value => value.map( ({value}) => value) )
}
