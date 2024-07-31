import { useEffect, useState } from "react";
import { toast } from "react-toastify";


// Custom hook
export function useFetch(url) {

    const [data, setData] = useState(null)

    
    // Refatorando o metodo post

    // As variaves abaixo serão usadas para podermos refatorar o fetch
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(null)
    const [config, setConfig] = useState(null)


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

    }, [url, callFetch]);


    // Refatorando o metodo post

    useEffect(() => {
       async function postData () {
        if(method === 'POST') {

            let fetchOptions = [url, config]

            try {
                
                const res = await fetch (...fetchOptions)

                if(!res.ok) {
                    throw new Error('Dado não foi postado')
                }

                toast.success('Dado postado com sucesso')

                setCallFetch(await res.json())

            } catch (error) {
                toast.error(error.message)
            }
        }
       }

       postData()
    }, [config])


    return { data }

}