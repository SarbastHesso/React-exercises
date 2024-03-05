import { useContext, useEffect, useState } from "react";
import ChannelCard from "../components/ChannelCard";
import { ChannelContext } from "../context/ChannelsContext";
import Pagination from "../components/Pagination";


const ChannelsList = () => {

  const {
    channels,
    currentChannelPage,
    totalChannelsPages,
    channelsPagination,
  } = useContext(ChannelContext);

  const [liveAudioSrc, setLiveAudioSrc] = useState<string>("");
  const [isAudioControls, setIsAudioControls] = useState<boolean>(false);


  const playLiveAudio = (src: string) => {
    setLiveAudioSrc(src);
    setIsAudioControls(true)
  }

  const closeAudioControls = () => {
    const audioElement = document.getElementById(
      "audio-element"
    ) as HTMLAudioElement;
    if (audioElement) {
      audioElement.src = liveAudioSrc;
      audioElement.pause();
    }
    setIsAudioControls(false);
  }

  useEffect(() => {
    const audioElement = document.getElementById(
      "audio-element"
    ) as HTMLAudioElement;
    if (audioElement && liveAudioSrc) {
      audioElement.src = liveAudioSrc;
      audioElement.addEventListener("loadedmetadata", () => {
        audioElement.play();
      });
    }
    return () => {
      // Cleanup event listener when component unmounts
      if (audioElement) {
        audioElement.removeEventListener("loadedmetadata", () => {});
      }
    };
  }, [liveAudioSrc]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentChannelPage]);

  return (
    <>
      <div
        className={
          isAudioControls ? "audio-container show-controls" : "audio-container"
        }
      >
        <audio id="audio-element" className="audio-controls" controls>
          <source src={liveAudioSrc} type="audio/mpeg" />
        </audio>
        <span className="close-icon" onClick={() => closeAudioControls()}>
          X
        </span>
      </div>
      <div className="cards-list">
        {channels.map((channel) => {
          return (
            <ChannelCard
              channel={channel}
              key={channel.id}
              playLiveAudio={playLiveAudio}
            />
          );
        })}
      </div>
      <Pagination
        totalPages={totalChannelsPages}
        currentPage={currentChannelPage}
        pagination={channelsPagination}
      />
    </>
  );
};

export default ChannelsList;
