import React from 'react';
import GratitudeItemsDisplay from './GratitudeItemsDisplay';
import TopPrioritiesDisplay from './TopPrioritiesDisplay'
import DailyAffirmationsDisplay from './DailyAffirmationsDisplay'
import HighlightsOfTheDayDisplay from './HighlightsOfTheDayDisplay';
import DailyReviewDisplay from './DailyReviewDisplay'

export default function EditJournalEntry() {

    return (
        <>
            <GratitudeItemsDisplay />
            <TopPrioritiesDisplay />
            <DailyAffirmationsDisplay />
            <HighlightsOfTheDayDisplay />
            <DailyReviewDisplay />
        </>
    )
}