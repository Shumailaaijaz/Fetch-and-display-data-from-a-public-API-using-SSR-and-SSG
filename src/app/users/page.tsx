import type { Metadata } from "next"

interface User {
  id: number
  name: string
  email: string
}

export const metadata: Metadata = {
  title: "Users | My Portfolio",
  description: "View all users",
}

async function getUsers(): Promise<User[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  if (!res.ok) {
    throw new Error("Failed to fetch users")
  }
  return res.json()
}

export default async function Users() {
  const users = await getUsers()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Users (SSG)</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.id} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
