import React, { useContext } from 'react';
import { JournalEntryContext } from './JournalEntryContext';

export default function DailyReviewInput() {

  const { dailyReview, handleDailyReviewInputChange } = useContext(JournalEntryContext);

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
