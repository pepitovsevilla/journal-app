import React from "react";
import GratitudeItemsInput from "./GratitudeItemsInput";
import TopPrioritiesInput from "./TopPrioritiesInput";
import DailyAffirmationsInput from "./DailyAffirmationsInput"

export default function EditJournalEntry() {
    return (
        <>
            <GratitudeItemsInput/>
            <TopPrioritiesInput />
            <DailyAffirmationsInput />
        </>
    )
}