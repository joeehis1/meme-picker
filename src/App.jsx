import { useMemo, useState } from "react";
import { catsData } from "./memeData";
import { Button, Modal, ModalFooter } from "react-bootstrap";
import { ModalBody } from "react-bootstrap";
import { EmotionsContextProvider } from "./context/emotionsContext";
import MemeOptionsForm from "./components/MemeOptionsForm";

const initialEmotions = catsData
    .map((cat) => {
        for (let emotions of cat.emotionTags) {
            return emotions;
        }
    })
    .filter((emotion, index, arr) => {
        if (arr.indexOf(emotion) === index) {
            return emotion;
        }
    });

function App() {
    const [emotions] = useState(initialEmotions);
    const [withAnimation, setWithAnimation] = useState(false);
    const [currentEmotion, setCurrentEmotion] = useState(emotions[0]);

    // This may no longer be a thing once react 19 comes in but this is a recommended approach apparently to avoid unnecessary renders when either current emotion or withAnimation changes
    const modalImage = useMemo(() => {
        return catsData.find((cat) => {
            return withAnimation
                ? cat.emotionTags.includes(currentEmotion) && cat.isGif
                : cat.emotionTags.includes(currentEmotion);
        });
    }, [currentEmotion, withAnimation]);

    const [modalShown, setModalShown] = useState(false);

    function generateMeme(e) {
        e.preventDefault();
        setModalShown(true);
    }

    return (
        <>
            <header className="py-4 ">
                <div className="container d-flex justify-content-center align-items-center">
                    <img src={"pumpkin.png"} style={{ width: "11.25rem" }} />
                    <h1>
                        Pumpkin&apos;s purrfect{" "}
                        <span className="d-block">Meme Picker</span>{" "}
                    </h1>
                </div>
            </header>
            <section className="meme-selector">
                <div className="container">
                    <Modal show={modalShown} centered>
                        <ModalBody>
                            <img
                                src={`${modalImage.image}`}
                                alt={modalImage.alt}
                            />
                        </ModalBody>
                        <ModalFooter style={{ border: "none" }}>
                            <Button onClick={() => setModalShown(false)}>
                                Close
                            </Button>
                        </ModalFooter>
                    </Modal>
                    {/* At which point you will probably wonder why i didnt simply pass setCurrentEmotion to the meme options form. I dont think what i did was wrong. My design choice here was in an attempt to avoid prop drilling */}
                    <EmotionsContextProvider
                        emotions={emotions}
                        currentEmotion={currentEmotion}
                        setCurrentEmotion={setCurrentEmotion}
                    >
                        <MemeOptionsForm
                            generateMeme={generateMeme}
                            withAnimation={withAnimation}
                            setWithAnimation={setWithAnimation}
                        />
                    </EmotionsContextProvider>
                </div>
            </section>
        </>
    );
}

export default App;
