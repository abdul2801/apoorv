
import React, { useState } from 'react'
export default function useFetchData(endpoint : string) {

    const [data , setData] = useState<any[]>([])
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState(null);

    React.useEffect(() => {
        fetch(process.env.REACT_APP_SERVER_URL + endpoint , { method : "GET" })
        .then(res => {
           
            if (!res.ok) {
                
                throw Error('Could not fetch the data for that resource');
            }
            return res.json();
        }
        )
           
        .then(data => {
            
            setData(data);
            setLoading(false);


        })
        .catch(error => {
            console.log(error);
            setError(error);
            setLoading(false);

        })
    },[endpoint])
    return {data , loading , error,setData}

}
