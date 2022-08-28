import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Card from './Card';

function FeedbackCard({ feedback, handleDelete }) {
  return (
    <Card>
      <div className="num-display">{feedback.rating}</div>
      <button onClick={() => handleDelete(feedback.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{feedback.review}</div>
    </Card>
  );
}

FeedbackCard.propTypes = {
  feedback: PropTypes.object.isRequired,
};

export default FeedbackCard;
