import { useEffect, useState } from "react"

export default function Fetch(){
    const [data, setData] = useState();

    useEffect(() =>{
        fetch("")
            .then(res => res.json())
            .then(info => setData(info.feed.entry))
    },[])

    return(
        <>
        </>
    )
}