import React from 'react';
import GratitudeItemsInput from "./GratitudeItemsInput";
import TopPrioritiesInput from "./TopPrioritiesInput";
import DailyAffirmationsInput from "./DailyAffirmationsInput"
import HighlightsOfTheDayInput from "./HighlightsOfTheDayInput";
import DailyReviewInput from "./DailyReviewInput";

export default function EditJournalEntry() {

    return (
        <>
            <div className="container">
                <GratitudeItemsInput/>
                <TopPrioritiesInput />
                <DailyAffirmationsInput />
                <HighlightsOfTheDayInput />
                <DailyReviewInput />
            </div>
        </>
    )
}