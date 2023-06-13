import React, { useContext } from 'react';
import { JournalEntryContext } from './JournalEntryContext';
import 'bootstrap/dist/css/bootstrap.css';
import EditJournalEntry from "./EditJournalEntry";
import DisplayJournalEntry from "./DisplayJournalEntry";


export default function JournalEntryContainer() {
  const { editMode, toggleEditMode } = useContext(JournalEntryContext);
  
  return (
    <>
      {editMode ? <EditJournalEntry /> : <DisplayJournalEntry />}
      <div className="container">
        <button type="button" class="btn btn-success w-100 btn-block" onClick={toggleEditMode}>DONE</button>
      </div>
    </>
  );
}