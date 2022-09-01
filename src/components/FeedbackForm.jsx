import { v4 as uuidv4 } from 'uuid';
import { useState, useContext, useEffect } from 'react';
import FeedbackContext from '../Context/FeedbackContext';
import Button from './Button';
import Card from './Card';
import RatingSelect from './RatingSelect';

function FeedbackForm() {
  const [review, setReview] = useState('');
  const [btnState, setBtnState] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(10);
  const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setReview(feedbackEdit.feedback.review);
      setRating(feedbackEdit.feedback.rating);
      setBtnState(false);
    }
  }, [feedbackEdit]);

  const handleReviewChange = (e) => {
    let value = e.target.value;
    if (!value) {
      setBtnState(true);
      setMessage(null);
    } else if (value && value.trim().length < 10) {
      setBtnState(true);
      setMessage(`Text must be 10 characters at least ~ ${10 - value.trim().length} characters more`);
    } else {
      setBtnState(false);
      setMessage(null);
    }
    setReview(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (review.trim().length >= 10) {
      const newFeedback = {
        id: uuidv4(),
        rating,
        review,
      };
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.feedback.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
      setReview('');
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate our web application?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input onChange={handleReviewChange} type="text" placeholder="Write a review" value={review} autoFocus />
          <Button type="submit" isDisabled={btnState}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
