import { useContext } from "react";
import Emotion from "./Emotion";
import { EmotionsContext } from "../context/emotionsContext";

export default function EmotionSelector() {
    const { emotions } = useContext(EmotionsContext);

    return emotions.map((emotion, index) => {
        return <Emotion key={emotion} index={index} emotion={emotion} />;
    });
}
