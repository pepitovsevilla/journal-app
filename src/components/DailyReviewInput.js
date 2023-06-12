import React, { useState } from 'react';

export default function DailyReviewInput() {
  const [dailyReview, setDailyReview] = useState('');

  const handleDailyReviewInputChange = (e) => {
    const updatedReview = e.target.value;;
    setDailyReview(updatedReview);
  };

  return (
    <div className='container'>
      <form>
          <label>HOW COULD I HAVE MADE TODAY EVEN BETTER?</label>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              value={dailyReview}
              onChange={(e) => handleDailyReviewInputChange(e)}
              placeholder="I could have..."
            />
          </div>
      </form>
    </div>
    
  );
}
