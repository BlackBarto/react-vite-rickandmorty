const  BASE_URL = "https://rickandmortyapi.com/api/character"

export default function fetchRandomCharacters({ signal }) {
    const result = []
    const currentIds = []
    let count = 11

    while (count >= 0) {
        const randomId = Math.round((Math.random() * 824 + 1))

        if (currentIds.includes(randomId)) continue
        currentIds.push(randomId)

        const promiseOfCharacter = fetch(`${BASE_URL}/${randomId}`, { signal })
            .then(res => res.ok ? res.json() : Promise.reject())
            .then(json => json)
            .catch(err => {
                console.log(err)
                return undefined
            })

        result.push(promiseOfCharacter)
        count = count - 1
    }

    return Promise.allSettled(result).then(value => value.filter(obj => obj?.value).map( ({value}) => value))
}
