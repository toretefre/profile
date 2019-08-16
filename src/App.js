import React, { lazy, Suspense } from 'react';
import { Router } from '@reach/router';
import './reset.css';
import './App.css';
import Header from './components/Header';
import LeftAside from './components/LeftAside';
const LandingPage = lazy(() => import('./containers/LandingPage'));
const CV = lazy(() => import('./containers/Cv'));

export const App = () => {
  return (
    <main>
      <Suspense fallback={<h1>Laster ;)</h1>}>
        <Header />
        <LeftAside />
        <Router>
          <LandingPage path="/" />
          <CV path="/cv" />
        </Router>
      </Suspense>
    </main>
  );
};

export default App;
