import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Profile from './components/Profile'
import ProfileDetails from './components/ProfileDetails'
import ProfileSettings from './components/ProfileSettings'
import Post from './components/Post'
import BlogPost from './components/BlogPost'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/">Home</Link> | <Link to="/profile">Profile</Link> |{' '}
          <Link to="/posts/1">Post Example</Link> |{' '}
          <Link to="/blog/123">Blog Example</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />

          {/* Protected route for Profile */}
          <Route
            path="/profile/*"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          >
            {/* Nested routes under Profile */}
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>

          {/* Dynamic route for posts */}
          <Route path="/posts/:id" element={<Post />} />

          {/* Dynamic route for blog posts */}
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
