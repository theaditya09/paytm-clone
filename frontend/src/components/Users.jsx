import { User } from "./User"
import { useEffect, useState } from "react"
import axios from "axios"
import { useAsyncError } from "react-router-dom"

export function Users(){

    const [search, setSearch] = useState("")
    const [users,setUsers] = useState([])
    const [debouncedSearch, setDebouncedSearch] = useState(search)

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(search);
        }, 300)
        return () => clearTimeout(timer)
    }, [search])

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/bulk?filter="+search)
        .then(function(response){
            setUsers(response.data.users)
        })
    }, [debouncedSearch])

    return <div>
        <div className="p-4 font-bold text-lg">
            Users
        </div>
        <div className="px-4">
            <input type="text" className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 w-full p-2 " placeholder={"Search Users..."} 
            onChange={(e) => {
                setSearch(e.target.value)
            }}/>
            {
                users.map(user => <User user={user}/>)
            }
        </div>
    </div>
}