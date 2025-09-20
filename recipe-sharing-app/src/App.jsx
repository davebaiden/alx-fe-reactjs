// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <h1>🍲 Recipe Sharing App</h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <SearchBar />
                <RecipeList />
              </>
            }
          />
          <Route path="/recipes/:id" element={<RecipeDetailsWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

// Wrapper to extract :id from URL
const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={Number(id)} />;
};

export default App;
