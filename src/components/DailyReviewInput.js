import React, { useState } from 'react';

export default function DailyReviewInput() {
  const [dailyReview, setDailyReview] = useState('');

  const handleDailyReviewInputChange = (e) => {
    const updatedAffirmations = e.target.value;;
    setDailyAffirmations(updatedAffirmations);
  };

  return (
    <div className='container'>
      <form>
          <label>DAILY AFFIRMATIONS</label>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              value={dailyAffirmations}
              onChange={(e) => handleDailyAffirmationsInputChange(e)}
              placeholder="I am..."
            />
          </div>
      </form>
    </div>
    
  );
}
