import React, { useContext } from 'react';
import { JournalEntryContext } from './JournalEntryContext';

export default function TopPrioritiesInput() {

  const { topPriorities, handleTopPrioritiesInputChange } = useContext(JournalEntryContext);

  return (
    <div className='container'>
      <form>
          <label>WHAT WILL I DO TO MAKE TODAY GREAT?</label>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              value={topPriorities[0]}
              onChange={(e) => handleTopPrioritiesInputChange(e, 0)}
              placeholder="Priority 1"
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              value={topPriorities[1]}
              onChange={(e) => handleTopPrioritiesInputChange(e, 1)}
              placeholder="Priority 2"
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              value={topPriorities[2]}
              onChange={(e) => handleTopPrioritiesInputChange(e, 2)}
              placeholder="Priority 3"
            />
          </div>
      </form>
    </div>
    
  );
}
