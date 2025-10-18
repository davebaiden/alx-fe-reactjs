import { useQuery } from '@tanstack/react-query'

async function fetchPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!res.ok) {
    throw new Error('Network response was not ok')
  }
  return res.json()
}

function PostsComponent() {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    cacheTime: 1000 * 60 * 5, // cache for 5 mins
    staleTime: 1000 * 30      // fresh for 30 secs
  })

  if (isLoading) return <p>Loading posts...</p>
  if (isError) return <p>Error: {error.message}</p>

  return (
    <div>
      <h2>Posts List</h2>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default PostsComponent
