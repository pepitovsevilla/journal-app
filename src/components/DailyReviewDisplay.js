import React, { useContext } from 'react';
import { JournalEntryContext } from './JournalEntryContext';

export default function DailyReviewDisplay() {
    
    const { dailyReview } = useContext(JournalEntryContext);

    return (
        <div className='container'>
            <div className="card">
                <div className="card-header">
                    HOW COULD I HAVE MADE TODAY EVEN BETTER?
                </div>
                <div className="card-body">
                    { dailyReview !== "" ? dailyReview : null }
                </div>
            </div>
        </div>
    
  );
}
