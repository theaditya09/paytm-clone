import { User } from "./User"
import { useEffect, useState } from "react"

export function Users(){

    const [search, setSearch] = useState("")
    let users = ["aditya", "aditya2", "adigen", "mohan", "rahul"]
    let filteredUsers = []

    filteredUsers = users.filter(user => user.includes(search))

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
                filteredUsers.map(user => <User name={user}/>)
            }
        </div>
    </div>
}