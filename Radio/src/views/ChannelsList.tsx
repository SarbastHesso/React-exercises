import { useEffect } from "react";
import ChannelCard from "../components/ChannelCard";
import { IChannel } from "../interfaces"

interface IChannelListProps {
  channels: IChannel[];
  currentPage: number;
  totalChannelsPages: number;
  channelsPagination: (page: number) => void;
}

const ChannelsList = (props: IChannelListProps) => {

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= props.totalChannelsPages; i++){
      pageNumbers.push(
        <button
          className={i === props.currentPage ? "page-number active" : "page-number"}
          key={i}
          onClick={() => props.channelsPagination(i)}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [props.currentPage])

  return (
    <>
      <div className="channels-list">
        {props.channels.map((channel) => {
          return <ChannelCard channel={channel} key={channel.id} />;
        })}
      </div>
      <div className="pagination">
        <button
          className={`previous-btn ${props.currentPage === 1 ? "disabled" : ""}`}
          onClick={() => props.channelsPagination(props.currentPage - 1)}
          disabled={props.currentPage === 1}
        >
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
        {renderPageNumbers()}
        <button
          className={`next-btn ${props.currentPage ==props.totalChannelsPages ? "disabled" : ""}`}
          onClick={() => props.channelsPagination(props.currentPage + 1)}
          disabled={props.currentPage === props.totalChannelsPages}
        >
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </>
  );
}

export default ChannelsList