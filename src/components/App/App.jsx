import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Header from '../Header/Header';
import FeedbackReview from '../FeedbackReview/FeedbackReview';
import ThankYou from '../ThankYou/ThankYou';
import AdminPage from '../AdminPage/AdminPage';
import HorizontalStepper from '../Stepper/Stepper';
import BottomNavBar from '../BottomNavBar/BottomNavBar';

function App() {

  return (
    <div className='App'>
      <Header />

      <Router>
        <Route path='/' exact>
          <HorizontalStepper />
        </Route>
        <Route path='/review' exact>
          <FeedbackReview />
        </Route>
        <Route path='/thankyou' exact>
          <ThankYou />
        </Route>
        <Route path='/admin' exact>
          <AdminPage />
        </Route>
        <BottomNavBar />
      </Router>

    </div>
  );
}

export default App;
