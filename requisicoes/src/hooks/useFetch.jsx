import { useEffect, useState } from "react";
import { toast } from "react-toastify";


// Custom hook
export function useFetch(url) {

    const [data, setData] = useState(null)

    useEffect(() => {

        async function getData() {
            try {
                const response = await fetch(url)

                if (!response.ok) {
                    throw new Error('Não foi possivel obter os dados')
                }

                setData(await response.json())

            } catch (error) {
                toast.error(error.message)
            }
        }

        getData()

    }, [url])


    // Refatorando o metodo post

    return { data }

}