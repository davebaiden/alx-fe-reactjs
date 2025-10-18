import { useParams } from 'react-router-dom'

function BlogPost() {
  const { id } = useParams()

  return (
    <div>
      <h2>Blog Post ID: {id}</h2>
      <p>This is the content for blog post #{id}.</p>
    </div>
  )
}

export default BlogPost
