import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  Routes,
  Route,
  HashRouter
} from "react-router-dom";
import SliderLarge from './components/main/sectionSliderLarge/SliderLarge';
import { SliderContext } from './context/SliderContext';
import SectionCategoriesMovies from './pages/sectionCategoriesMovies/SectionCategoriesMovies';
import CategoryMovies from './pages/sectionCategoriesMovies/CategoryMovies';
import { Provider } from 'react-redux';
import { store } from './services/store/store'
import SectionCategoriesTvShows from './pages/sectionCategoriesTvShows/SectionCategoriesTvShows';
import CategoryTvShows from './pages/sectionCategoriesTvShows/CategoryTvShows';
import Searchresults from './pages/sectionSearchResults/SearchResults';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <SliderContext>
        <HashRouter>
          <Routes>
            <Route path='/' element={<App />}>
              <Route path=':id' element={<SliderLarge />} />
            </Route>
            <Route path='/movies' element={<SectionCategoriesMovies />}>
              <Route path='film/:id' element={<SliderLarge />} />
            </Route>
            <Route path='/movies/genre/:id' element={<CategoryMovies />}>
              <Route path='film/:filmId' element={<SliderLarge />} />
            </Route>
            <Route path='/tv' element={<SectionCategoriesTvShows />}>
              <Route path='film/:id' element={<SliderLarge />} />
            </Route>
            <Route path='/tv/genre/:id' element={<CategoryTvShows />}>
              <Route path='film/:filmId' element={<SliderLarge />} />
            </Route>
            <Route path='/search/:keyword' element={<Searchresults />}>
              <Route path='film/:id' element={<SliderLarge />} />
            </Route>
          </Routes>
        </HashRouter>
    </SliderContext>
  </Provider>
);
