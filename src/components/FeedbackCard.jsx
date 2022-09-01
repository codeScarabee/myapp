import { FaTimes, FaEdit } from 'react-icons/fa';
import { useContext } from 'react';
import FeedbackContext from '../Context/FeedbackContext';
import Card from './Card';

function FeedbackCard({ feedback }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{feedback.rating}</div>
      <button onClick={() => deleteFeedback(feedback.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button className="edit" onClick={() => editFeedback(feedback)}>
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{feedback.review}</div>
    </Card>
  );
}

export default FeedbackCard;
