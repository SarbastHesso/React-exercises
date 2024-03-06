import { useParams } from "react-router-dom";
import { ChannelProgramContext } from "../context/ChannelProgramsContext";
import { useContext, useEffect } from "react";
import Pagination from "../components/Pagination";
import ChannelProgramCard from "../components/ChannelProgramCard";

const ChannelPrograms = () => {
  const { channelId } = useParams();

  const {
    programs,
    programChannelId,
    currentProgramsPage,
    totalProgramsPages,
    programsPagination,
  } = useContext(ChannelProgramContext);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (channelId) {
      programChannelId(channelId);
    }
  }, [currentProgramsPage, channelId, programChannelId]);

  return (
    <>
      <div className="cards-list">
        {programs.map((program, index) => {
          return (
            <ChannelProgramCard program={program} key={`${program.id}-${index}`} />
          );
        })}
      </div>
      <Pagination
        totalPages={totalProgramsPages}
        currentPage={currentProgramsPage}
        pagination={programsPagination}
      />
    </>
  );
}

export default ChannelPrograms