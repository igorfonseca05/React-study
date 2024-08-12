import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export function fetchData(url) {

    const [data, setData] = useState(null)


    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(null)
    const [config, setConfig] = useState(null)


    function httpConfig (data, method) {
        if(method === 'POST') {

            setConfig({
                method,
                headers : {
                    "Content-type" : 'Application/json'
                },
                body: JSON.stringify(data)
            })

        }

        setMethod(method)
    }

    useEffect(() => {

        async function getData() {
            try {
                
                const res = await fetch(url)

                if(!res.ok) {
                    throw new Error('Não foi possivel recuperar os dados')
                }

                setData(await res.json())

            } catch (error) {
                toast.error(error.message)
                console.log(error)
            }
        }

        getData()

    }, [url, callFetch])


    //Now, i'm going to implement the post method in my application

    useEffect(() => {
         async function postData() {
            if(method === 'POST') {

                const fetchConfig = [url, config]

                try {
                
                    const res = await fetch(...fetchConfig)
    
                    if(!res.ok) {
                        throw new Error('Não foi possivel postar os dados')
                    }
    
                    setCallFetch(await res.json())
    
                } catch (error) {
                    toast.error(error.message)
                    console.log(error)
                }

            } 
         }

         postData()
    }, [config])
    

    return {data, httpConfig}

}