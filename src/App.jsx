import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from './components/Layout/SharedLayout';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CatalogPage = lazy(()=> import ('./pages/CatalogPage/CatalogPage'));
const FavoritePage = lazy(() => import('./pages/FavoritePage/FavoritePage'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="favorites" element={<FavoritePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
export default App;
