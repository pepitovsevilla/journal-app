import React from 'react';
import GratitudeItemsDisplay from './GratitudeItemsDisplay';
import TopPrioritiesDisplay from './TopPrioritiesDisplay'
import DailyAffirmationsDisplay from './DailyAffirmationsDisplay'

export default function EditJournalEntry() {

    return (
        <>
            <GratitudeItemsDisplay />
            <TopPrioritiesDisplay />
            <DailyAffirmationsDisplay />
        </>
    )
}