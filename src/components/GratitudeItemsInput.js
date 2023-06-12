import React, { useState } from 'react';

export default function GratitudeItemsInput() {
  const [gratitudeItems, setGratitudeItems] = useState(['', '', '']);

  const handleGratitudeItemsInputChange = (e, index) => {
    const updatedItems = [...gratitudeItems];
    updatedItems[index] = e.target.value;
    setGratitudeItems(updatedItems);
  };

  return (
    <div className='container'>
      <form>
        <div className='form-group'>
          <label>3 THINGS IM GRATEFUL FOR...</label>
          <div>
            <input
              value={gratitudeItems[0]}
              onChange={(e) => handleGratitudeItemsInputChange(e, 0)}
              placeholder="Gratitude 1"
            />
          </div>
          <div>
            <input
              value={gratitudeItems[1]}
              onChange={(e) => handleGratitudeItemsInputChange(e, 1)}
              placeholder="Gratitude 2"
            />
          </div>
          <div>
            <input
              value={gratitudeItems[2]}
              onChange={(e) => handleGratitudeItemsInputChange(e, 2)}
              placeholder="Gratitude 3"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
