import { Link, Outlet } from 'react-router-dom'

function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        <Link to="details">Details</Link> |{' '}
        <Link to="settings">Settings</Link>
      </nav>

      {/* Nested route content */}
      <Outlet />
    </div>
  )
}

export default Profile
