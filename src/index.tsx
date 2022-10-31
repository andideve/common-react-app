import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/globals.css';
import reportWebVitals from './reportWebVitals';
import routes from './config/routes';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <React.Suspense fallback={null}>
                <route.component />
              </React.Suspense>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
