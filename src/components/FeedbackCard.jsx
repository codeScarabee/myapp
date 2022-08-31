import { FaTimes } from 'react-icons/fa';
import { useContext } from 'react';
import FeedbackContext from '../Context/FeedbackContext';
import PropTypes from 'prop-types';
import Card from './Card';

function FeedbackCard({ feedback }) {
  const { deleteFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{feedback.rating}</div>
      <button onClick={() => deleteFeedback(feedback.id)} className="close">
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
