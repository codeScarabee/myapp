import { useState } from 'react';
import Button from './Button';
import Card from './Card';

function FeedbackForm() {
  const [review, setReview] = useState('');
  const [btnState, setBtnState] = useState(true);
  const [message, setMessage] = useState('');
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
  return (
    <Card>
      <form>
        <h2>How would you rate our web application?</h2>
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
