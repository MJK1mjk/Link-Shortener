import { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function Url() {
    const {id} = useParams();
    useEffect(() => {
        fetch(`http://localhost:4000/${id}`)
        .then(response=>{
            response.json().then(info=>{
                console.log(info)
                window.location.replace(info.url)
            })
        });
      }, []);
    return
}