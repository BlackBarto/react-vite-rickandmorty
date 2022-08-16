import { useState } from "react"

export default function BTNLoadMore({loadMore}) {
    const [loading, setLoading] = useState(false)

    const handleLoad = () => {
        setLoading(!loading)
        loadMore().then(() => { 
            setLoading(prev => !prev) 
        })
    }

    return (
       <div className="relative mt-8 mx-auto overflow-hidden">
           <div className={`${loading ? "opacity-1 z-30" : "opacity-0 z-10"} absolute inset-0 transition-opacity duration-400 bg-sky-500 rounded-lg`}>
               <div className={`${loading ? "animate-spin" : ""} absolute inset-0 m-auto h-6 w-6 rounded-full border-4 border-gray-300 border-t-black`}></div>
           </div>
           <button 
            onClick={handleLoad} 
            className="relative z-20 py-3 px-5 rounded-lg bg-sky-300 uppercase text-bold text-lg text-black transition-colors duration-300 hover:bg-blue-700 hover:text-white">
                 More characters
           </button>
       </div>
    )
}
