import React, { useContext } from 'react';
import { AppContext } from './AppContext';

export default function DailyAffirmationsDisplay() {
    
    const { dailyAffirmations } = useContext(AppContext);

    return (
        <div className='container'>
            <div className="card">
                <div className="card-header">
                    DAILY AFFIRMATIONS
                </div>
                <div className="card-body">
                    { dailyAffirmations !== "" ? dailyAffirmations : null }
                </div>
            </div>
        </div>
    
  );
}
