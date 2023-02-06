import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { tagRemoved, tagSelected } from "../../rtk/features/filter/filterSlice";

const Tag = ({ title }) => {
  const { tags: selectedTags } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const isSelected = selectedTags.includes(title);
  const style = isSelected
    ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
    : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer";
  const handleSelect = () => {
    isSelected ? dispatch(tagRemoved(title)) : dispatch(tagSelected(title));
  };
  return (
    <div className={style} onClick={handleSelect}>
      {title}
    </div>
  );
};

export default Tag;
