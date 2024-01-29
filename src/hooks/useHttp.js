import { useEffect, useState } from "react"
import { ERROR_MESSAGES} from '../utils/constant'

const useHttp = (url, config)=>{
    const[data, setData] = useState()
    const[isLoading, setIsLoading] = useState(false)
    const[error, setError] = useState()
    const sendRequest = async (url, config)=>{
        try{
            const result = await fetch(url, config)
            const data = await result.json()
            return {data}
        }catch(e){
            throw error(e)
        }
    }
    const sendHttpRequest = async ()=>{
        setIsLoading(true)
        try{
            const {data} =  await sendRequest(url, config)
            setData(data)
            setIsLoading(false)
        }catch(e){
            setError(e|| ERROR_MESSAGES.genericMessage)
            setIsLoading(false)
        } 
    }

    useEffect(()=>{
        if(!config || config && config.method === 'GET'){
            sendHttpRequest()
        }
        
    }, [url, config])
    // exporting sendHttpRequest function for POST/PUT/PATCH request.
    return {data, isLoading, error, sendHttpRequest}
}

export default useHttp