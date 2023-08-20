import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Header from '../Header/Header';
import FeelingToday from '../FeelingToday/FeelingToday';
import UnderstandingContent from '../UnderstandingContent/UnderstandingContent';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import FeedbackReview from '../FeedbackReview/FeedbackReview';
import ThankYou from '../ThankYou/ThankYou';
import AdminPage from '../AdminPage/AdminPage';
import { Stepper } from '@mui/material';
import HorizontalStepper from '../Stepper/Stepper';

function App() {

  return (
    <div className='App'>
      <Header />

      <Router>
        {/* <Route path='/' exact>
          <FeelingToday />
        </Route>
        <Route path='/understanding' exact>
          <UnderstandingContent />
        </Route>
        <Route path='/support' exact>
          <Supported />
        </Route>
        <Route path='/comments' exact>
          <Comments />
        </Route>*/}
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
      </Router>
    </div>
  );
}

export default App;
