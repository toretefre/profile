import React, { lazy, Suspense } from 'react';
import { Router } from '@reach/router';
import './App.css';
const LandingPage = lazy(() => import('./containers/LandingPage'));
const CV = lazy(() => import('./containers/Cv'));

export const App = () => {
  return (
    <main>
      <Suspense fallback={<h1>Laster ;)</h1>}>
        <Router>
          <LandingPage path="/" />
          <CV path="/cv" />
        </Router>
      </Suspense>
    </main>
  );
};

export default App;
