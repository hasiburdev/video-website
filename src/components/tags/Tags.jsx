import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../../rtk/features/tags/tagsSlice";
import Tag from "./Tag";
import Loading from "../ui/Loading";

const Tags = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, error, tags } = useSelector(
    (state) => state.tags
  );

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  return tags?.length > 0 ? (
    <section>
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
        {tags.map(tag => <Tag key={tag.key} title={tag.title} />)}
      </div>
    </section>
  ) : null;
};

export default Tags;
