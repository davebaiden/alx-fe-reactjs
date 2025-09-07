import WelcomeMessage from './components/WelcomeMessage'
import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'
import UserProfile from './UserProfile'
import UserContext from './UserContext'

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
      <div>
        <Header />
        <MainContent />
        <Footer />
        <WelcomeMessage />
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography" /> 
        <UserContext.Provider value={userData}>
          <ProfilePage />
        </UserContext.Provider>
      </div>
      
  );
}
export default App
