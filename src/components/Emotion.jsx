import { useContext } from "react";
import { EmotionsContext } from "../context/emotionsContext";

export default function Emotion({ emotion, index }) {
    const { emotions, changeEmotion, currentEmotion } =
        useContext(EmotionsContext);
    return (
        <label
            key={emotion}
            htmlFor={emotion}
            className={`d-flex p-2 justify-content-between mx-auto border border-top-1 ${
                index === 0
                    ? "rounded-top"
                    : index === emotions.length - 1
                    ? "rounded-bottom "
                    : ""
            }`}
            style={{
                backgroundColor: `${
                    emotion === currentEmotion ? "var(--bs-red)" : ""
                }`,
                color: `${emotion === currentEmotion ? "var(--bs-light)" : ""}`,
                maxWidth: "12.5rem",
            }}
        >
            <span>{emotion}</span>
            <input
                type="radio"
                value={emotion}
                style={{
                    accentColor: `var(--bs-red)`,
                }}
                id={emotion}
                name="emotion"
                checked={emotion === currentEmotion}
                onChange={(e) => {
                    changeEmotion(e.target.value);
                }}
            />
        </label>
    );
}
