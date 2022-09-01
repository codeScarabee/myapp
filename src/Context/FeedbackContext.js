import { createContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState([
    {
      id: '1',
      rating: 9,
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      id: '2',
      rating: 7,
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      id: '3',
      rating: 10,
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
  ]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    feedback: {},
    edit: false,
  });

  const deleteFeedback = (id) => {
    if (window.confirm('You are going to delete this feedback?')) {
      setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
    }
  };
  const addFeedback = (newFeedback) => {
    setFeedbacks([newFeedback, ...feedbacks]);
  };
  const editFeedback = (feedback) =>
    setFeedbackEdit({
      feedback,
      edit: true,
    });
  const updateFeedback = (id, updFeed) => {
    setFeedbacks(feedbacks.map((feedback) => (feedback.id === id ? { ...feedback, ...updFeed } : feedback)));
    setFeedbackEdit((prev) => ({ ...prev, edit: false }));
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
