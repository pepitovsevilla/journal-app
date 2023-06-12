import React, { useContext } from 'react';
import { AppContext } from './AppContext';

export default function DailyAffirmationsInput() {

  const { dailyAffirmations, handleDailyAffirmationsInputChange } = useContext(AppContext);
  
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
