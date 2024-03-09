import { createContext } from "react";

const EmotionsContext = createContext();

function EmotionsContextProvider({
    children,
    emotions,
    currentEmotion,
    setCurrentEmotion,
}) {
    function changeEmotion(val) {
        setCurrentEmotion(val);
    }

    // You will notice that i have a function here that is supposed to change the currentEmotion by setting state
    // Once you see this you will probably take a look at APP.jsx

    const contextValue = { emotions, changeEmotion, currentEmotion };

    return (
        <EmotionsContext.Provider value={contextValue}>
            {children}
        </EmotionsContext.Provider>
    );
}

export { EmotionsContext, EmotionsContextProvider };
