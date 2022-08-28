import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';
import FeedbackCard from './FeedbackCard';

function FeedbackList({ feedbacks, handleDelete }) {
  if (!feedbacks || feedbacks.length === 0) {
    return <p className="no-feedback">No Feedback Yet</p>;
  }

  return (
    <div>
      <AnimatePresence>
        {feedbacks.map((feedback) => (
          <motion.div
            key={feedback.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FeedbackCard key={feedback.id} feedback={feedback} handleDelete={handleDelete} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
  // return (
  //   <div className="feedback-ilst">
  //     {feedbacks.map((feedback) => (
  //       <FeedbackCard key={(feedback.id = uuidv4())} feedback={feedback} handleDelete={handleDelete} />
  //     ))}
  //   </div>
  // );
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
