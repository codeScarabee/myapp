import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import FeedbackCard from './FeedbackCard';

function FeedbackList({ feedbacks, handleDelete }) {
  if (!feedbacks || feedbacks.length === 0) {
    return <p>No Feedback Yet</p>;
  }
  return (
    <div className="feedback-ilst">
      {feedbacks.map((feedback) => (
        <FeedbackCard key={(feedback.id = uuidv4())} feedback={feedback} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

FeedbackList.propTypes = {
  feedbacks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      review: PropTypes.string.isRequired,
    })
  ),
};

export default FeedbackList;
