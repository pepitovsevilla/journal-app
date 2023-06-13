import React, { useContext } from 'react';
import { JournalEntryContext } from './JournalEntryContext';

export default function GratitudeItemsDisplay() {
    const { topPriorities } = useContext(JournalEntryContext);

    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    WHAT WILL I DO TO MAKE TODAY GREAT?
                </div>
                <ol className="list-group list-group-flush">
                    {topPriorities.map((item, index) => {
                        if (item !== "") {
                            return <li key={index} className="list-group-item">{item}</li>;
                        } else {
                            return null;
                        }
                    })}
                </ol>
            </div>
        </div>
    );
}
