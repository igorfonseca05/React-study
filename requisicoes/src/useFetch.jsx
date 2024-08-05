import {useEffect, useState} from "react";

export function fetchData (endPoint) {

    const [data, setData] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    // This variable is used with the data post function
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(null)
    const [config, setConfig] = useState(null)



    function httpConfig (data, method) {

        if(method === 'POST') {

            const config = {
                method: 'POST',
                headers: {
                    'Content-type': 'Application/json',
                    'Accept': 'Application/json'
                },
                body: JSON.stringify(data)
            }

            setConfig(config)
        }

        setMethod(method)
        
    }


    // this is the basic architecture of get data from an API using react
    useEffect(() => {

        setLoading(true)

        async function getData() {
            try {    
                const res = await fetchData(url)

                if(!res.ok) {
                    throw new Error('Não foi possivel obter os dados')
                }

                setLoading(false)
                return setData(await res.json())
                
    
            } catch (error) {
                console.log(error.message)
                setError(error.message)
            }
        }

        getData()
    }, [url ,callFetch])


    useEffect(() => {

        setLoading(true)

        async function postData() {
            if(method === 'POST') {

                const fetchConfig = [url, config]

                try {
                    const res = await fetch(...fetchConfig)

                    if(!res.ok) {
                        throw new Error('something went wrong to post data')
                    }

                    setLoading(false)
                    // setData(await res.json())   
                    callFetch(await res.json())                 

                } catch (error) {
                    setError(error.message)
                    console.log(error.message)
                }

            }

        }

        postData()
    }, [config])


    return {data, httpConfig}

}

