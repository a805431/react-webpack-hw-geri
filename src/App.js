import GlobalCSS from './styles/global.css.js';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from './components/Container.js';
import Home from './components/Home';
import NotFound from './components/NotFound';
import FormCategory from './components/FormCategory.js';
import TableCategory from './components/TableCategory.js';

function App() {
  return (
    <BrowserRouter>
      <GlobalCSS />
      <Routes>
        <Route path="/" element={<Container />}>
          <Route index element={<Home/>}/>
          <Route exact path="current-farm" element={<FormCategory />} />
          <Route exact path="fields" element={<TableCategory />} />
          <Route exact path="nutrition-plan" element={<NotFound />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
