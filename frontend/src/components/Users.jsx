import { User } from "./User"
import { useEffect, useState } from "react"
import axios from "axios"

export function Users() {
  const [search, setSearch] = useState("")
  const [users, setUsers] = useState([])
  const [debouncedSearch, setDebouncedSearch] = useState(search)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search)
    }, 300)
    return () => clearTimeout(timer)
  }, [search])

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/user/bulk?filter=${encodeURIComponent(debouncedSearch)}`)
      .then(function (response) {
        setUsers(response.data.users)
      })
  }, [debouncedSearch])

  return (
    <div className="px-4 pb-6">
      <div className="font-bold text-lg mb-2">Users</div>
      <div className="glass-card p-4 animate-fade-in-up glass-field">
        <input
          type="text"
          className="mb-3 glass-input text-sm rounded-xl w-full p-3 hover-glow"
          placeholder={"Search users..."}
          onChange={(e) => {
            setSearch(e.target.value)
          }}
        />
        {users.map((user) => (
          <User key={user._id} user={user} />
        ))}
      </div>
    </div>
  )
}