import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SliderLarge from './components/main/sectionSliderLarge/SliderLarge';
import { SliderContext } from './context/SliderContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SliderContext>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path=':id' element={<SliderLarge />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </SliderContext>
);
