import React, { useContext } from 'react';
import { AppContext } from './AppContext';

export default function GratitudeItemsInput() {
  const { gratitudeItems, handleGratitudeItemsInputChange } = useContext(AppContext);

  return (
    <div className='container'>
      <form>
          <label>3 THINGS IM GRATEFUL FOR...</label>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              value={gratitudeItems[0]}
              onChange={(e) => handleGratitudeItemsInputChange(e, 0)}
              placeholder="Gratitude 1"
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              value={gratitudeItems[1]}
              onChange={(e) => handleGratitudeItemsInputChange(e, 1)}
              placeholder="Gratitude 2"
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              value={gratitudeItems[2]}
              onChange={(e) => handleGratitudeItemsInputChange(e, 2)}
              placeholder="Gratitude 3"
            />
          </div>
      </form>
    </div>
    
  );
}
