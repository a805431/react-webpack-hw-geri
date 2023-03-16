import GlobalCSS from './styles/global.css.js';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from './components/Container.js';
import Home from './components/Home';
import NotFound from './components/NotFound';
import FormCategory from './components/FormCategory.js';
import TableCategory from './components/TableCategory.js';
import ModalPage from './components/modal/ModalPage.js';

function App() {
  return (
    <BrowserRouter>
      <GlobalCSS />
      <Routes>
        <Route path="/" element={<Container />}>
          <Route index element={<Home/>}/>
          <Route exact path="current-farm" element={<FormCategory />} />
          <Route exact path="fields" element={<TableCategory />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
