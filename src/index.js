import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  Routes,
  Route,
} from "react-router-dom";
import SliderLarge from './components/main/sectionSliderLarge/SliderLarge';
import { SliderContext } from './context/SliderContext';
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SliderContext>
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path=':id' element={<SliderLarge />} />
        </Route>
      </Routes>
    </HashRouter>
  </SliderContext>
);
