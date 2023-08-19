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

function App() {

  return (
    <div className='App'>
      <Header />

      <FeelingToday />
      <UnderstandingContent />
      <Supported />
      <Comments />
      <FeedbackReview />
      <ThankYou />

    </div>
  );
}

export default App;
