import React, { useContext } from 'react';
import { AppContext } from './components/AppContext';
import 'bootstrap/dist/css/bootstrap.css';
import EditJournalEntry from "./components/EditJournalEntry";
import DisplayJournalEntry from "./components/DisplayJournalEntry";


function App() {
  const { editMode, toggleEditMode } = useContext(AppContext);
  
  return (
    <>
      {editMode ? <EditJournalEntry /> : <DisplayJournalEntry />}
      <div className="container">
        <button type="button" class="btn btn-success w-100 btn-block" onClick={toggleEditMode}>DONE</button>
      </div>
    </>
  );
}

export default App;
