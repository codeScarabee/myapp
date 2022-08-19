import PropTypes from 'prop-types';
import Card from './Card';

function FeedbackCard({ feedback }) {
  return (
    <Card>
      <div className="num-display">{feedback.rating}</div>
      <div className="text-display">{feedback.text}</div>
    </Card>
  );
}

FeedbackCard.propTypes = {
  feedback: PropTypes.object.isRequired,
};

export default FeedbackCard;
