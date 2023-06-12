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

    const [highlightsOfTheDay, setHighlightsOfTheDay] = useState(['', '', '']);

    const handleHighlightsOfTheDayInputChange = (e, index) => {
      const updatedItems = [...highlightsOfTheDay];
      updatedItems[index] = e.target.value;
      setHighlightsOfTheDay(updatedItems);
    };

    const [dailyReview, setDailyReview] = useState('');

    const handleDailyReviewInputChange = (e) => {
      const updatedReview = e.target.value;;
      setDailyReview(updatedReview);
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
      highlightsOfTheDay, 
      setHighlightsOfTheDay,
      handleHighlightsOfTheDayInputChange,
      dailyReview, 
      setDailyReview,
      handleDailyReviewInputChange,
      editMode, 
      setEditMode, 
      toggleEditMode 
    }}>{children}</AppContext.Provider>;
}