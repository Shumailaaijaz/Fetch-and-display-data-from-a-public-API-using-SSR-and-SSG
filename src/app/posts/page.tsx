import type { Metadata } from "next"

interface Post {
  id: number
  title: string
  body: string
}

export const metadata: Metadata = {
  title: "Posts | My Portfolio",
  description: "View all posts",
}

async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  if (!res.ok) {
    throw new Error("Failed to fetch posts")
  }
  return res.json()
}

export default async function Posts() {
  const posts = await getPosts()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Posts (SSR)</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

