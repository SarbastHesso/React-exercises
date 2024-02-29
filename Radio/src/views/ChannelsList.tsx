import { useEffect } from "react";
import ChannelCard from "../components/ChannelCard";
import { IChannel } from "../interfaces"

interface IChannelListProps {
  channels: IChannel[];
  currentChannelPage: number;
  totalChannelsPages: number;
  channelsPagination: (page: number) => void;
}

const ChannelsList = (props: IChannelListProps) => {

  const renderPageNumbers = () => {

    const pageNumbers = [];
    const totalPages = props.totalChannelsPages;
    const currentPage = props.currentChannelPage;

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
  }, [props.currentChannelPage]);

  return (
    <>
      <div className="cards-list">
        {props.channels.map((channel) => {
          return <ChannelCard channel={channel} key={channel.id} />;
        })}
      </div>
      <div className="pagination">
        <button
          className={`previous-btn ${
            props.currentChannelPage === 1 ? "disabled" : ""
          }`}
          onClick={() => props.channelsPagination(props.currentChannelPage - 1)}
          disabled={props.currentChannelPage === 1}
        >
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
        {renderPageNumbers()}
        <button
          className={`next-btn ${
            props.currentChannelPage == props.totalChannelsPages
              ? "disabled"
              : ""
          }`}
          onClick={() => props.channelsPagination(props.currentChannelPage + 1)}
          disabled={props.currentChannelPage === props.totalChannelsPages}
        >
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </>
  );
}

export default ChannelsList