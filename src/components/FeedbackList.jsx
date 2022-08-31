import { AnimatePresence, motion } from 'framer-motion';
import FeedbackContext from '../Context/FeedbackContext';
import { useContext } from 'react';
import FeedbackCard from './FeedbackCard';

function FeedbackList({ handleDelete }) {
  const { feedbacks } = useContext(FeedbackContext);
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
            transition={{ duration: 0.7 }}
          >
            <FeedbackCard key={feedback.id} feedback={feedback} />
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

export default FeedbackList;
