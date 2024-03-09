import { useContext } from "react";
import { EmotionsContext } from "../context/emotionsContext";
import EmotionSelector from "./EmotionSelector";

export default function MemeOptionsForm({
    generateMeme,
    setWithAnimation,
    withAnimation,
}) {
    const { emotions, changeEmotion, currentEmotion } =
        useContext(EmotionsContext);

    return (
        <form onSubmit={generateMeme}>
            <fieldset>
                <legend className="text-center fw-bold ">
                    How do you feel?
                </legend>
                <EmotionSelector
                    emotions={emotions}
                    handleEmotionChange={(val) => changeEmotion(val)}
                    currentEmotion={currentEmotion}
                />
            </fieldset>
            <label className="d-flex display-6 justify-content-center gap-3 my-4">
                <span>Animated GIF</span>
                <input
                    type="checkbox"
                    checked={withAnimation}
                    onChange={(e) => {
                        setWithAnimation(e.target.checked);
                    }}
                />
            </label>
            <button className="btn btn-dark  d-block mx-auto">Get Image</button>
        </form>
    );
}
