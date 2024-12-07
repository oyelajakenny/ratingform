import { useState } from "react";
import styles from "./RatingCard.module.css";

const RatingCard = () => {
  const [selectedRating, setSelectedRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
  };

  const handleSubmit = () => {
    if (selectedRating) {
      setSubmitted(true);
    }
  };

  return (
    <div className={styles.card}>
      {!submitted ? (
        <>
          <div className={styles.icon}>
            <span>⭐</span>
          </div>
          <h2 className={styles.title}>How did we do?</h2>
          <p className={styles.description}>
            Please let us know how we did with your support request! All
            feedback is appreciated to help us improve our offering.
          </p>
          <div className={styles.ratings}>
            {[1, 2, 3, 4, 5].map((rating, index) => (
              <button
                key={index}
                className={`${styles.ratingButton} ${
                  selectedRating === rating ? styles.active : ""
                }`}
                onClick={() => handleRatingClick(rating)}
              >
                {rating}
              </button>
            ))}
          </div>
          <button
            className={styles.submitButton}
            onClick={handleSubmit}
            disabled={!selectedRating}
          >
            Submit
          </button>
        </>
      ) : (
        <div className={styles.thankYou}>
          <span className={styles.icon}>🎉</span>
          <h2>Thank you!</h2>
          <p>
            You rated us {selectedRating} out of 5. We appreciate your feedback!
          </p>
        </div>
      )}
    </div>
  );
};

export default RatingCard;
