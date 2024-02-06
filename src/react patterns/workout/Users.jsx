import React from 'react'
import useUsers from './hooks/useUsers'

const Users = () => {
    const users = useUsers()
    if(!users) return null
  return (
    <div>

        {users && users.map((user) => (
            <h1 key={user.id}>{user.name}</h1>
        ))}
    </div>
  )
}

export default Users