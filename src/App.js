import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import Card from './components/Card';

function App() {
  const [feedbacks, setFeedbacks] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if (window.confirm('You are going to delete this feedback?')) {
      setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
    }
  };
  return (
    <>
      <Header text="Feedback UI" />
      <div className="container">
        <FeedbackStats feedbacks={feedbacks} />
        <FeedbackList feedbacks={feedbacks} handleDelete={deleteFeedback} />
      </div>
      <Card>This is a Style Component</Card>
    </>
  );
}

export default App;
