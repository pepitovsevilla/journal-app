import React, { useContext } from 'react';
import { AppContext } from './AppContext';

export default function GratitudeItemsDisplay() {
    const { gratitudeItems } = useContext(AppContext);

    return (
        <div className='container'>
            <div className="card">
                <div class="card-header">
                    3 THINGS IM GRATEFUL FOR...
                </div>
                <ol className="list-group list-group-flush">
                    {gratitudeItems.map((item) => {
                    return <li className="list-group-item">{item}</li>;
                    })}
                </ol>
            </div>
        </div>
  );
}
