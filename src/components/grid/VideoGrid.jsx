import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../rtk/features/videos/videosSlice";
import VideoGridItems from "./VideoGridItems";
import Loading from "../ui/Loading";

const VideoGrid = () => {
  const dispatch = useDispatch();
  const { videos, isLoading, isError, error } = useSelector(
    (state) => state.videos
  );
  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  let content;
  if (isLoading) content = <Loading />;

  return (
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          <VideoGridItems />
        </div>
      </section>
    </section>
  );
};

export default VideoGrid;
