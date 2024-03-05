import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ChannelEpisodeContext } from "../context/ChannelEpisodesContext";
import EpisodeCard from "../components/EpisodeCard";
import Pagination from "../components/Pagination";

const ChannelScheduledEpisodes = () => {

  const {channelId} = useParams();

    const {
      episodes,
      episodesChannelId,
      currentEpisodesPage,
      totalEpisodesPages,
      episodesPagination,
  } = useContext(ChannelEpisodeContext);


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (channelId) {
      episodesChannelId(channelId);
    }
  }, [currentEpisodesPage, channelId, episodesChannelId]);

  return (
    <>
      <div className="cards-list">
        {episodes.map((episode, index) => {
          return (
            <EpisodeCard episode={episode} key={`${episode.episodeid}-${index}`}/>
          );
        })}
      </div>
      <Pagination
        totalPages={totalEpisodesPages}
        currentPage={currentEpisodesPage}
        pagination={episodesPagination}
      />
    </>
  )
};

export default ChannelScheduledEpisodes;