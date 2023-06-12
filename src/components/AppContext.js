import { useState, createContext } from "react";

export const AppContext = createContext(null)

export const AppContextProvider = ({ children }) => {

    const [gratitudeItems, setGratitudeItems] = useState(['', '', '']);
    
    const handleGratitudeItemsInputChange = (e, index) => {
        const updatedItems = [...gratitudeItems];
        updatedItems[index] = e.target.value;
        setGratitudeItems(updatedItems);
      };

    const [topPriorities, setTopPriorities] = useState(['', '', '']);

    const handleTopPrioritiesInputChange = (e, index) => {
      const updatedItems = [...topPriorities];
      updatedItems[index] = e.target.value;
      setTopPriorities(updatedItems);
    };

    const [dailyAffirmations, setDailyAffirmations] = useState('');

      const handleDailyAffirmationsInputChange = (e) => {
        const updatedAffirmations = e.target.value;;
        setDailyAffirmations(updatedAffirmations);
      };


    const [editMode, setEditMode] = useState(true);
    
    function toggleEditMode() {
        setEditMode(prevEditMode => !prevEditMode);
      }
    
    return <AppContext.Provider value={{ 
      gratitudeItems, 
      setGratitudeItems, 
      handleGratitudeItemsInputChange, 
      topPriorities, 
      setTopPriorities, 
      handleTopPrioritiesInputChange,
      dailyAffirmations, 
      setDailyAffirmations,
      handleDailyAffirmationsInputChange,
      editMode, 
      setEditMode, 
      toggleEditMode 
    }}>{children}</AppContext.Provider>;
}