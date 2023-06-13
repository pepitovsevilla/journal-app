import React from 'react';
import JournalEntryContainer from './components/JournalEntryContainer';
import { JournalEntryContextProvider } from './components/JournalEntryContext';

function App() {
  
  return (
    <>
      <JournalEntryContextProvider>
        <JournalEntryContainer />
      </JournalEntryContextProvider>
    </>
  );
}

export default App;
