import React, { useContext } from 'react';
import { AppContext } from './AppContext';

export default function HighlightsOfTheDayDisplay() {
    const { highlightsOfTheDay } = useContext(AppContext);

    return (
        <div className='container'>
            <div className="card">
                <div className="card-header">
                    HIGHLIGHTS OF THE DAY
                </div>
                <ol className="list-group list-group-flush">
                    {highlightsOfTheDay.map((item, index) => {
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
