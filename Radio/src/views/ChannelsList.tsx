import { useContext, useEffect, useState } from "react";
import ChannelCard from "../components/ChannelCard";
import { ChannelContext } from "../context/ChannelsContext";


const ChannelsList = () => {

  const {
    channels,
    currentChannelPage,
    totalChannelsPages,
    channelsPagination,
  } = useContext(ChannelContext);

  const [liveAudioSrc, setLiveAudioSrc] = useState<string>("");
  const [isAudioControls, setIsAudioControls] = useState<boolean>(false);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const totalPages = totalChannelsPages;
    const currentPage = currentChannelPage;

    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + 3);

    if (endPage - startPage < 3) {
      endPage = Math.min(totalPages, currentPage + 1);
      startPage = Math.max(1, endPage - 3);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          className={i === currentPage ? "page-number active" : "page-number"}
          key={i}
          onClick={() => channelsPagination(i)}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

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
    if (audioElement) {
      audioElement.src = liveAudioSrc;
      audioElement.play();
    }
  }, [liveAudioSrc]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentChannelPage]);

  return (
    <>
      <div className={isAudioControls ? "audio-container show-controls" : "audio-container"}>
        <audio id="audio-element" className="audio-controls" controls>
          <source src={liveAudioSrc} type="audio/mpeg" />
        </audio>
        <span className="close-icon" onClick={() => closeAudioControls()}>X</span>
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
      <div className="pagination">
        <button
          className={`previous-btn ${
            currentChannelPage === 1 ? "disabled" : ""
          }`}
          onClick={() => channelsPagination(currentChannelPage - 1)}
          disabled={currentChannelPage === 1}
        >
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
        {renderPageNumbers()}
        <button
          className={`next-btn ${
            currentChannelPage == totalChannelsPages
              ? "disabled"
              : ""
          }`}
          onClick={() => channelsPagination(currentChannelPage + 1)}
          disabled={currentChannelPage === totalChannelsPages}
        >
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </>
  );
};

export default ChannelsList;
