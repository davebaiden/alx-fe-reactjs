import { useQuery } from '@tanstack/react-query'

async function fetchPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!res.ok) {
    throw new Error('Network response was not ok')
  }
  return res.json()
}

function PostsComponent() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    cacheTime: 1000 * 60 * 5, // ✅ Cache data for 5 minutes
    staleTime: 1000 * 30      // ✅ Data considered fresh for 30 seconds
  })

  if (isLoading) return <p>Loading posts...</p>
  if (isError) return <p>Error: {error.message}</p>

  return (
    <div>
      <h2>Posts List</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default PostsComponent
