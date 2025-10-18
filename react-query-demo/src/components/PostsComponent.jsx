import { useQuery } from '@tanstack/react-query'

function PostsComponent() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      if (!res.ok) {
        throw new Error('Network response was not ok')
      }
      return res.json()
    },
    refetchOnWindowFocus: false, // ✅ don’t refetch on tab focus
    keepPreviousData: true,      // ✅ keep old data during refetch
    cacheTime: 1000 * 60 * 5,    // ✅ cache data for 5 minutes (default is 5)
    staleTime: 1000 * 30         // ✅ data considered fresh for 30 seconds
  })

  if (isLoading) return <p>Loading posts...</p>
  if (error) return <p>Error: {error.message}</p>

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
