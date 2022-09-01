import { useContext } from 'react';
import FeedbackContext from '../Context/FeedbackContext';

function FeedbackStats() {
  const { feedbacks } = useContext(FeedbackContext);
  let average =
    feedbacks.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedbacks.length;
  average = parseFloat(average.toFixed(1));

  return (
    <div className="feedback-stats">
      <h4>{feedbacks.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedbackStats;
