import { useEffect, useState } from "react";


export function useFetch(url) {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function getData () {
            setLoading(true)

            try {
                const res = await fetch(url)

                if(!res.ok) {
                    throw new Error('Não foi possível obter os dados')
                }

                setData(await res.json())
            } catch (error) {
                console.log(error.message)
                setError(error.message)
            }
        }

        getData()

    },  [])

     return {data}
}

