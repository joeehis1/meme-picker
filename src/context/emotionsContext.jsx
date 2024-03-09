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

    const contextValue = { emotions, changeEmotion, currentEmotion };

    return (
        <EmotionsContext.Provider value={contextValue}>
            {children}
        </EmotionsContext.Provider>
    );
}

export { EmotionsContext, EmotionsContextProvider };
