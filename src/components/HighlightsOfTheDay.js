import React, { useState } from 'react';

export default function HighlightsOfTheDayInput() {
  const [highlightsOfTheDay, setHighlightsOfTheDay] = useState(['', '', '']);

  const handleHighlightsOfTheDayInputChange = (e, index) => {
    const updatedItems = [...highlightsOfTheDay];
    updatedItems[index] = e.target.value;
    setHighlightsOfTheDay(updatedItems);
  };

  return (
    <div className='container'>
      <form>
          <label>HIGHLIGHTS OF THE DAY</label>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              value={highlightsOfTheDay[0]}
              onChange={(e) => handleHighlightsOfTheDayInputChange(e, 0)}
              placeholder="Highlight 1"
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              value={highlightsOfTheDay[1]}
              onChange={(e) => handleHighlightsOfTheDayInputChange(e, 1)}
              placeholder="Highlight 2"
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              value={highlightsOfTheDay[2]}
              onChange={(e) => handleHighlightsOfTheDayInputChange(e, 2)}
              placeholder="Highlight 3"
            />
          </div>
      </form>
    </div>
    
  );
}
