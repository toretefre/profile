import React, { lazy, Suspense } from 'react';
import { Router } from '@reach/router';
import './reset.css';
import './App.css';
import Footer from './components/Footer';
const LandingPage = lazy(() => import('./containers/LandingPage'));
const CV = lazy(() => import('./containers/Cv'));

export const App = () => {
  return (
    <main>
      <Suspense fallback={<p>Laster...</p>}>
        <Router>
          <LandingPage path="/" />
          <CV path="/cv" />
        </Router>
        <Footer />
      </Suspense>
    </main>
  );
};

export default App;
