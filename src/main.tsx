import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import UserDataTable from './features/AdminTable';
import ChartForm from './features/ChartForm';
import NotFound from './features/NotFound';
import Home from './features/AdminHome';
import AllocateDomains from './features/AllocateDomain';
import App from './features/RenderTOL';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ChartForm />} />
        <Route path="/admin" element={<Home />}></Route>
        <Route path="/tree" element={<App />}></Route>
        <Route path="/admin/domains" element={<AllocateDomains />} />
        <Route path="/admin/users" element={<UserDataTable />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
