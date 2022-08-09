export default function Character({character}) {
    const {name, status, species, image, episode: [firstEpisode]} = character 
    const firstSeen = firstEpisode.split("/").pop()

    return (
        <article className="flex flex-col w-full bg-blue-700 border-2 border-transparent transition-colors duration-200 hover:border-blue-400">
            <h4 className="text-center text-white text-xl leading-loose">{name}</h4>
            <img src={image} alt={`Image of ${name}`} className="w-full h-auto" />
            <p className="flex flex-col items-center py-3">
                <span className="font-bold">
                    {status === "Dead" 
                    ? <span className="font-bold text-red-500 px-1.5">{status}</span> 
                    : status === "Alive" 
                    ? <span className="font-bold text-green-500 px-1.5">{status}</span> 
                    : <span className="font-bold text-slate-500 px-1.5">{status}</span>}
                    <span className="px-1.5 text-white border-2 border-transparent border-l-white">{species}</span>
                </span>
                <span>First seen in {firstSeen} episode</span>
            </p>
        </article>
    )
}