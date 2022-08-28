import { useState } from 'react';
import React from 'react';
import FeedbackData from './data/FeedbackData';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

function App() {
  const [feedbacks, setFeedbacks] = useState(FeedbackData);
  const addFeedback = (newFeedback) => {
    setFeedbacks([newFeedback, ...feedbacks]);
  };
  const deleteFeedback = (id) => {
    if (window.confirm('You are going to delete this feedback?')) {
      setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
    }
  };
  return (
    <>
      <Header text="Feedback UI" />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedbacks={feedbacks} />
        <FeedbackList feedbacks={feedbacks} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
