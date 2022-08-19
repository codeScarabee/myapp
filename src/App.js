import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import Card from './components/Card';

function App() {
  const [feedbacks, setFeedbacks] = useState(FeedbackData);
  return (
    <>
      <Header text="Feedback UI" />
      <div className="container">
        <FeedbackList feedbacks={feedbacks} />
      </div>
      <Card>This is a Style Component</Card>
    </>
  );
}

export default App;
