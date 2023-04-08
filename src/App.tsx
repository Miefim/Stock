import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/Home'

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<HomePage />} />
    {/* <Route path="/:id" element={<BookItemPage />} /> */}
  </>
))

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
