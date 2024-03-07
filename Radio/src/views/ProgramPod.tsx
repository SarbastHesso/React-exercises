import { useContext, useEffect, useState } from "react";
import { ProgramInfoContext } from "../context/ProgramContext";
import Pagination from "../components/Pagination";
import PodfileCard from "../components/PodfileCard";

const ProgramPod = () => {

  const {
    podfiles,
    currentPodfilesPage,
    totalPodfilesPages,
    PodfilesPagination,
  } = useContext(ProgramInfoContext);

  const [audioSrc, setAudioSrc] = useState<string>("");
  const [isAudioControls, setIsAudioControls] = useState<boolean>(false);

  const playAudio = (src: string) => {
    setAudioSrc(src);
    setIsAudioControls(true);
  };

  const closeAudioControls = () => {
    const audioElement = document.getElementById(
      "broadcast-audio-element"
    ) as HTMLAudioElement;
    if (audioElement) {
      audioElement.pause();
      audioElement.removeAttribute("src");
    }
    setIsAudioControls(false);
  };

  useEffect(() => {
    const audioElement = document.getElementById(
      "broadcast-audio-element"
    ) as HTMLAudioElement;
    if (audioElement && audioSrc) {
      audioElement.src = audioSrc;
      audioElement.addEventListener(
        "loadedmetadata",
        handleAudioLoadedMetadata
      );
      audioElement.play();
    }
    return () => {
      if (audioElement) {
        audioElement.removeEventListener(
          "loadedmetadata",
          handleAudioLoadedMetadata
        );
      }
    };
  }, [audioSrc]);

  const handleAudioLoadedMetadata = () => {
    const audioElement = document.getElementById(
      "broadcast-audio-element"
    ) as HTMLAudioElement;
    if (audioElement) {
      audioElement.play();
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPodfilesPage]);

  return (
    <>
      <div
        className={
          isAudioControls ? "audio-container show-controls" : "audio-container"
        }
      >
        <audio id="broadcast-audio-element" className="audio-controls" controls>
          <source src={audioSrc} type="audio/mpeg" />
        </audio>
        <span className="close-icon" onClick={closeAudioControls}>
          X
        </span>
      </div>
      <div className="cards-list">
        {podfiles.map((podfile) => (
          <PodfileCard
            key={podfile.id}
            podfile={podfile}
            playAudio={playAudio}
          />
        ))}
      </div>
      <Pagination
        totalPages={totalPodfilesPages}
        currentPage={currentPodfilesPage}
        pagination={PodfilesPagination}
      />
    </>
  );
}

export default ProgramPod