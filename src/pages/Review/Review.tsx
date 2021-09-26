import { IonRow, IonCol } from '@ionic/react';

import './Review.css'

const Review: React.FC = () => {
  return (
    <IonRow className="review-container">
      <IonCol size='12' className="review-box review-box-write">
        <div className="review-button">
          Write a review
        </div>
      </IonCol>
      <IonCol size='12' className="review-box review-box-upload">
        <div className="review-button">
          Upload a photo
        </div>
      </IonCol>
    </IonRow>
  );
};

export default Review;