import React from "react";
import GratitudeItemsInput from "./GratitudeItemsInput";
import TopPrioritiesInput from "./TopPrioritiesInput";
import DailyAffirmationsInput from "./DailyAffirmationsInput"
import HighlightsOfTheDayInput from "./HighlightsOfTheDay";

export default function EditJournalEntry() {
    return (
        <>
            <GratitudeItemsInput/>
            <TopPrioritiesInput />
            <DailyAffirmationsInput />
            <HighlightsOfTheDayInput />
        </>
    )
}