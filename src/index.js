import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  Routes,
  Route
} from "react-router-dom";
import SliderLarge from './components/main/sectionSliderLarge/SliderLarge';
import { SliderContext } from './context/SliderContext';
import { HashRouter } from "react-router-dom";
import SectionCategoriesMovies from './pages/sectionCategoriesMovies/SectionCategoriesMovies';
import CategoryMovies from './pages/sectionCategoriesMovies/CategoryMovies';
import { Provider } from 'react-redux';
import { store } from './services/store/store'
import SectionCategoriesTvShows from './pages/sectionCategoriesTvShows/SectionCategoriesTvShows';
import CategoryTvShows from './pages/sectionCategoriesTvShows/CategoryTvShows';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <SliderContext>
        <HashRouter>
          <Routes>
            <Route path='/' element={<App />}>
              <Route path=':id' element={<SliderLarge />} />
            </Route>
            <Route path='/movies' element={<SectionCategoriesMovies />} />
            <Route path='/movies/genre/:id' element={<CategoryMovies />} />
            <Route path='/tv' element={<SectionCategoriesTvShows />} />
            <Route path='/tv/genre/:id' element={<CategoryTvShows />} />
          </Routes>
        </HashRouter>
    </SliderContext>
  </Provider>
);
